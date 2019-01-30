import React, { Component } from 'react';
import './App.css';
import {Button} from './components/Button';
import {Input} from './components/Input';
import {Clear} from './components/Clear';
import * as math from 'mathjs';

class App extends Component {

  state = {
    input: ""
  }

  handleUpdateInput = (val) => {
    const operators = ["+", "-", "*", "/"]
    const { input } = this.state

    if(input === ""){
      if(operators.includes(val)){
        return;
      }
    }

    if((input[input.length-1] === "+"
      || input[input.length-1] === "-"
      || input[input.length-1] === "/"
      || input[input.length-1] === "*")
      && operators.includes(val)){
      return;
    }

    this.setState({input: input === '0' ? val : input + val})
  }

  handleDotInput = (val) => {
    if(this.state.input.indexOf('.') === -1){
      this.setState({input: this.state.input + val})
    }
  }

  handleEqual = (val) => {
    const { input } = this.state

    if(input[input.length-1] === "+"
      || input[input.length-1] === "-"
      || input[input.length-1] === "/"
      || input[input.length-1] === "*"
      || input[input.length-1] === "."){
        return; 
      }
    this.setState({input: math.eval(this.state.input)})
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
            <Button handleClick={this.handleUpdateInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.handleUpdateInput}>1</Button>
            <Button handleClick={this.handleUpdateInput}>2</Button>
            <Button handleClick={this.handleUpdateInput}>3</Button>
            <Button handleClick={this.handleUpdateInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.handleDotInput}>.</Button>
            <Button handleClick={this.handleUpdateInput}>0</Button>
            <Button handleClick={this.handleEqual}>=</Button>
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
