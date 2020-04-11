import React from 'react';
import DistanceProvidor from './contexts/Distance';
import Header from './components/Header';
import Miles from './components/distance/Miles';
import Kilometers from './components/distance/Kilometers';
import Feet from './components/distance/Feet';
import Yards from './components/distance/Yards';



import './App.css';

function App() {
  return (
    <DistanceProvidor>
      <Header />
      <div className="container" >

        <div>
          <header className="center">
            <h2>Distance</h2>
          </header>
          <div className="section center"> <Miles /> </div>
          <div className="section center"> <Kilometers /> </div>
          <div className="section center"> <Feet /> </div>
          <div className="section center"> <Yards /> </div>
        </div>
      </div>
    </DistanceProvidor>
  );
}

export default App;
