import React, { Component } from 'react';
import './App.css';
import SectionOne from './components/SectionOne'; 
import Headers from './components/Headers';

class App extends Component {
  render() {
    return (
      <div>
        <Headers />
        <main className='main'>
          <SectionOne />
        </main>
      </div>
    );
  }
}

export default App;
