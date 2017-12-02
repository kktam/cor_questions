import React, { Component } from 'react';

import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import Avatar from 'material-ui/Avatar';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

import { COR_CALENDAR_API_GETEVENTS } from './../api/const';

class CalendarList extends Component {
  events = [];
  indexes = [];

  constructor(props) {
    super(props)
    this.getCalendarEvents = this.getCalendarEvents.bind(this)
    this.getCalendarEventsSuccess = this.getCalendarEventsSuccess.bind(this)
    this.state = {
    };


    // immediately try to get the data
    this.getCalendarEvents(COR_CALENDAR_API_GETEVENTS);
  }

  getCalendarEvents(path) {
    // during test use these test data
    this.events = [ { name: "Brendan Lim", index: 1, image : "images/ok-128.jpg" } , 
              { name: "Eric Hoffman", index: 2, image: "images/kolage-128.jpg" },
              { name: "Grace Ng", index: 3, image: "images/uxceo-128.jpg" } ];
    this.indexes = this.events.map( function (obj, index) {
      return obj.name;
    });
  }

  getCalendarEventsSuccess(result) {
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