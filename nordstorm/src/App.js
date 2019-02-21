import React, { Component } from 'react';
import './App.css';
import Headers from './components/Headers';
import SectionOne from './components/SectionOne'; 
import SectionTwo from './components/SectionTwo';
import Noteworthy from './components/Noteworthy';
import Runway from './components/Runway';
import AdBreak from './components/AdBreak.jsx';
import Category from './components/Category';
import WearToWhere from './components/WearToWhere';

class App extends Component {
  render() {
    return (
      <div>
        <Headers />
        <main className='main'>
          <SectionOne />
          <SectionTwo />
          <Noteworthy />
          <Runway />
          <AdBreak />
          <Category />
          <WearToWhere />
        </main>
      </div>
    );
  }
}

export default App;
