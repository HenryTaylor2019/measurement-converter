import React from 'react';
import ConverterContextProvidor from './contexts/ConverterContext';

import Header from './components/Header';
import Miles from './components/distance/Miles';
import Kilometers from './components/distance/Kilometers';
import Feet from './components/distance/Feet';
import Yards from './components/distance/Yards';

import Stone from './components/weights/Stone';
import Kilograms from './components/weights/Kilograms';
import Pounds from './components/weights/Pounds';
import Ounces from './components/weights/Ounces';




import './App.css';

function App() {
  return (
    <ConverterContextProvidor>
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

        <div>
          <header className="center">
            <h2>Weight</h2>
          </header>
          <div className="section center"> <Stone /> </div>
          <div className="section center"> <Kilograms /> </div>
          <div className="section center"> <Pounds /> </div>
          <div className="section center"> <Ounces /> </div>
        </div>
      </div>






    </ConverterContextProvidor>
  );
}

export default App;
