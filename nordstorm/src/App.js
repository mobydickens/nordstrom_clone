import React, { Component } from 'react';
import './App.css';
import Headers from './components/Headers';
import SectionOne from './components/SectionOne'; 
import SectionTwo from './components/SectionTwo';
import Noteworthy from './components/Noteworthy';

class App extends Component {
  render() {
    return (
      <div>
        <Headers />
        <main className='main'>
          <SectionOne />
          <SectionTwo />
          <Noteworthy />
        </main>
      </div>
    );
  }
}

export default App;
