import React, { Component } from 'react';

import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

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
    this.onCalendarItemClosed = this.onCalendarItemClosed.bind(this);    
    this.state = {
      openCard: false,
      selectedItem: null
    };

   // immediately try to get the data
   this.getCalendarEvents(COR_CALENDAR_API_GETEVENTS);    
  }

  componentDidMount() {
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

      let postData = { };

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

    // mark previous opened item to closed
    if (this.state.selectedItem != null) {
      this.events[this.state.selectedItem.id].isOpened = false;
    }

    // mark item as opened by dialog
    this.events[dataObj.id].isOpened = true;

    // set dialog open state
    this.setState({
      selectedItem: this.events[dataObj.id],
      openCard : true
    });
  }

  /*
   * Handle close events from Calendar Card
   */ 
  onCalendarItemClosed() {
    if (this.selectedItem != null) {
      this.events[this.selectedItem.id].isOpened = false;
    }
    
    // set dialog open state
    this.setState({
      openCard : false
    });    
  }

  render() {
    var clickHandler = this.onCalendarItemClicked;
    var closeHandler = this.onCalendarItemClosed;
    var title = (this.state.selectedItem == null) ? null : this.state.selectedItem.title;
    var location = (this.state.selectedItem == null) ? null : this.state.selectedItem.location;
    var date = (this.state.selectedItem == null) ? null : this.state.selectedItem.date; 
    var description = (this.state.selectedItem == null) ? null : this.state.selectedItem.description; 

    return (
      <div>
        <List>
          <Subheader>Events</Subheader>
          {this.events.map(function (obj, index) {
            return <ListItem
              primaryText={obj.title}
              key={obj.id}
              onClick={(e) => clickHandler(e, obj)}
            >
              </ListItem>
              })}
        </List>     
        { 
          <CalendarCard 
            open={this.state.openCard}
            cardtitle={title}
            subtitle={location}
            date={date}
            description={description}
            onClose={closeHandler} /> }      
      </div>          
    );
  }
}

export default CalendarList;