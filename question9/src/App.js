import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CalendarList from './scene/CalendarList';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <CalendarList />
      </MuiThemeProvider>
    );
  }
}

export default App;
