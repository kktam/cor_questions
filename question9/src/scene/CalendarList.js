import React, { Component } from 'react';

import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import Avatar from 'material-ui/Avatar';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

import axios from 'axios';
import createCORSRequest from './../api/cors';
import { COR_CALENDAR_API_GETEVENTS } from './../api/const';

class CalendarList extends Component {
  events = [];
  indexes = [];
  test = false;
  method = 'POST';
  xhr = null; 

  constructor(props) {
    super(props)
    this.test = this.props.test;
    this.getCalendarEvents = this.getCalendarEvents.bind(this);
    this.getCalendarEventsSuccess = this.getCalendarEventsSuccess.bind(this);
    this.getCalendarEventsFailed = this.getCalendarEventsFailed.bind(this);   
    this.state = {
    };


    // immediately try to get the data
    this.getCalendarEvents(COR_CALENDAR_API_GETEVENTS);
  }

  getCalendarEvents(path) {
    if (this.test === true) {
      // during test use these test data
      this.events = [{ name: "Brendan Lim", index: 1, image: "images/ok-128.jpg" },
      { name: "Eric Hoffman", index: 2, image: "images/kolage-128.jpg" },
      { name: "Grace Ng", index: 3, image: "images/uxceo-128.jpg" }];
      this.indexes = this.events.map(function (obj, index) {
        return obj.name;
      });
    } else {
    
      axios.post(path, {
        value: 1
      }).then(this.getCalendarEventsSuccess)
      .catch(this.getCalendarEventsFailed);

    }
  }

  getCalendarEventsSuccess(result) {
    // Success code goes here.
    //console.log(`success:\n\n${JSON.stringify(result, null, 2)}`)

    this.events = result;    
  }

  getCalendarEventsFailed(result) {      
    // Error code goes here.
    window.alert(`aws failed:\n\n${JSON.stringify(result, null, 2)}`)      
  }  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-title">Question 9</div>
        </header>
        <List>
          <Subheader>Events</Subheader>
          {this.events.map(function (obj, index) {
            return <ListItem
              primaryText={obj.name}
              leftAvatar={<Avatar src={obj.image} />}
              rightIcon={<CommunicationChatBubble />}
            />
          })}
        </List>
      </div>
    );
  }
}

export default CalendarList;