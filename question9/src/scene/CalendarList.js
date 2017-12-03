import React, { Component } from 'react';

import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

import CalendarCard from './CalendarCard';

import createCORSRequest from './../api/cors';
import { COR_CALENDAR_API_GETEVENTS } from './../api/const';

import testData from './../data/event.js';
import { assignIdToData } from './../utils/arrayManip';

class CalendarList extends Component {
  events = [];
  indexes = [];
  test = true;
  method = 'POST';
  xhr = null;

  constructor(props) {
    super(props)
    //this.test = this.props.test;
    this.getCalendarEvents = this.getCalendarEvents.bind(this);
    this.getCalendarEventsSuccess = this.getCalendarEventsSuccess.bind(this);
    this.getCalendarEventsFailed = this.getCalendarEventsFailed.bind(this);
    this.onCalendarItemClicked = this.onCalendarItemClicked.bind(this);
    this.state = {
      openCard: false
    };


    // immediately try to get the data
    this.getCalendarEvents(COR_CALENDAR_API_GETEVENTS);
  }

  getCalendarEvents(path) {
    if (this.test == true) {
      // during test use these test data

      // assign ids to the data
      var modifiedData = assignIdToData(testData);

      //window.alert(`modifiedData:\n\n${JSON.stringify(modifiedData, null, 2)}`);      
      if (modifiedData != null) {
        this.events = modifiedData;
      }
    } else {

      this.xhr = createCORSRequest(this.method, path);
      this.xhr.onload = this.getCalendarEventsSuccess;
      this.xhr.onerror = this.getCalendarEventsFailed;

      let postData = { value: 20 };

      // eslint-disable-next-line
      let postDataStr = JSON.stringify(postData);

      this.xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      this.xhr.setRequestHeader('Accepts', 'application/json');
      //xhr.setRequestHeader('x-api-key', API_KEY);
      this.xhr.send(postDataStr);
    }
  }

  getCalendarEventsSuccess() {
    var result = this.xhr.responseText;
    var resultJson = JSON.parse(result);
    // Success code goes here.
    console.log(`success:\n\n${JSON.stringify(result, null, 2)}`);

    resultJson = assignIdToData(resultJson);
    this.events = resultJson;
  }

  getCalendarEventsFailed() {
    var result = this.xhr.responseText;
    try {
      var resultJson = JSON.parse(result);
      // Error code goes here.
      window.alert(`failed:\n\n${JSON.stringify(result, null, 2)}`);
    } catch (err) {
      console.error(`failed:\n\n${JSON.stringify(err, null, 2)}`);
    }
  }

  /*
   * Handle click events from selected Calendar item
   * @param e - event object
   * @param dataObj data object selected on the Calendar list
   */
  onCalendarItemClicked(e, dataObj) {
    //window.alert(`click event:\n\n${JSON.stringify(dataObj, null, 2)}`);

    // validate data prior to procedding
    if (dataObj == null) {
      return;
    }

    // mark item as opened by dialog
    this.events[dataObj.id].isOpened = true;

    // set dialog open state
    this.setState({openCard : true});
  }

  render() {
    var clickHandler = this.onCalendarItemClicked;

    return (
      <div className="App">
        <header className="App-header">
          <div className="App-title">Question 9</div>
        </header>
        <List>
          <Subheader>Events</Subheader>
          {this.events.map(function (obj, index) {
            return <ListItem
              primaryText={obj.title}
              key={obj.id}
              onClick={(e) => clickHandler(e, obj)}
              rightIcon={<CommunicationChatBubble />}
            >
              </ListItem>
              })}
        </List>
        <CalendarCard 
          open={this.state.openCard} />        
      </div>
    );
  }
}

export default CalendarList;