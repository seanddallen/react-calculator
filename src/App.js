import React, { Component } from 'react';
import './App.css';
import {Button} from './components/Button'
import {Input} from './components/Input'
import {Clear} from './components/Clear'

class App extends Component {

  state = {
    input: ""
  }

  handleUpdateInput = (val) => {
    this.setState({input: this.state.input + val})
  }

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <Input input={this.state.input}></Input>
          <div className="row">
            <Button handleClick={this.handleUpdateInput}>7</Button>
            <Button handleClick={this.handleUpdateInput}>8</Button>
            <Button handleClick={this.handleUpdateInput}>9</Button>
            <Button handleClick={this.handleUpdateInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.handleUpdateInput}>4</Button>
            <Button handleClick={this.handleUpdateInput}>5</Button>
            <Button handleClick={this.handleUpdateInput}>6</Button>
            <Button handleClick={this.handleUpdateInput}>x</Button>
          </div>
          <div className="row">
            <Button handleClick={this.handleUpdateInput}>1</Button>
            <Button handleClick={this.handleUpdateInput}>2</Button>
            <Button handleClick={this.handleUpdateInput}>3</Button>
            <Button handleClick={this.handleUpdateInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.handleUpdateInput}>.</Button>
            <Button handleClick={this.handleUpdateInput}>0</Button>
            <Button handleClick={this.handleUpdateInput}>=</Button>
            <Button handleClick={this.handleUpdateInput}>-</Button>
          </div>
          <div className="row">
            <Clear handleClear={() => this.setState({input: ""})}>
              Clear
            </Clear>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
