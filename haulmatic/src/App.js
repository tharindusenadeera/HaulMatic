import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="list students">
          <div className="col-sm-6">
            <table>
              <tr>
                <td>Student ID</td>
                <td>Student Name</td>
                <td>Student Age</td>
              </tr>
              <tr>
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>
              </tr>
            </table>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
