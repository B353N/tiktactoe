import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <div className='board'>
        <div className='square'></div>
        <div className='square'></div>
        <div className='square'></div>
        <div className='square'></div>
        <div className='square'></div>
        <div className='square'></div>
        <div className='square'></div>
        <div className='square'></div>
        <div className='square'></div>
      </div>
    </div>
  );
}

export default App;
