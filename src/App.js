import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      player_turn: 'X',
      board: ['', '', '', '', '', '', '', '', '']
    }
  }

  squareClicked(index) {
    let player_turn = this.state.player_turn
    let board = this.state.board

    board[index] = player_turn
    player_turn = player_turn === 'X' ? 'O' : 'X';
  }

  render() {
    return (
      <div className="App">
        <h1>Tic Tac Toe</h1>
        <div className='board'>
          {this.state.board.map((square) => {
            return <div onClick={this.squareClicked} className='square'>{square}</div>
          })}
        </div>
      </div>
    );
  }
}

export default App;
