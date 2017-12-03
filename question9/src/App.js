import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CalendarList from './scene/CalendarList';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <div className="App-title">Question 9</div>
          </header>
        </div>
        <CalendarList />
      </MuiThemeProvider>
    );
  }
}

export default App;
