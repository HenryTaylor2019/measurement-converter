import React from 'react';
import ConverterContextProvidor from './contexts/ConverterContext';
import Header from './components/Header';
import Miles from './components/distance/Miles';
import Kilometers from './components/distance/Kilometers';



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

        </div>

      </div>




    </ConverterContextProvidor>
  );
}

export default App;
