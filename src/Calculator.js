import React, { Component } from "react"
import './calculator.css'

function NumberButtons(props) {
  return(
    <button 
      className="number-button"
      onClick={props.onClick}>
        {props.value}
    </button>
  )
}

function OperatorButtons(props) {
  return(
    <button 
      className = "operator-buttons">
        {props.symbol}
    </button>
  )
}

function DisplayScreen(props) {
  return(
    <div className = "display">
      {props.value}
    </div>
  )
}

class Keypad extends Component {
  constructor(props) {
      super(props)
      this.state = {
        number: 0,  
    }
  }

  handleClick = (i) => {
    this.setState({ number: i })
  }

  renderNumberButtons(i){
    return(
      <NumberButtons
        value={i} 
        onClick={() => this.handleClick(i)}
      />
    )
  }

  renderOperatorButtons(i){
    return(
      <OperatorButtons symbol={i}/>
    )
  }

  render() {
    return(
      <div className = 'keypad' >
        <div className = "button-row">
          {this.renderNumberButtons(7)}
          {this.renderNumberButtons(8)}
          {this.renderNumberButtons(9)}
          {this.renderOperatorButtons(<i class="fas fa-plus"></i>)}
        </div>
        <div className="button-row">                 
          {this.renderNumberButtons(4)}
          {this.renderNumberButtons(5)}
          {this.renderNumberButtons(6)}
          {this.renderOperatorButtons(<i class="fas fa-minus"></i>)}
        </div>
        <div className="button-row">                 
          {this.renderNumberButtons(1)}
          {this.renderNumberButtons(2)}
          {this.renderNumberButtons(3)}
          {this.renderOperatorButtons(<i class="fas fa-divide"></i>)}
        </div>
        <div className="button-row">
          {this.renderNumberButtons(0)}
          {this.renderNumberButtons('a/c')}
          {this.renderOperatorButtons(<i class="fas fa-equals"></i>)}
          {this.renderOperatorButtons(<i class="fas fa-times"></i>)}
        </div>
      </div>
    )
  }
}

class Display extends Component{
  renderDisplay(i){
    return(
      <DisplayScreen value={i}/>
    )
  }

  render() {
    return(
      <div>
        {this.renderDisplay(this.props.number)}
      </div>
      )
    }
  }

class Calculator extends Component{
  render(){
    return(
      <div>
        <Display number={0}/>
        <Keypad/>
      </div>
    )
  }
}

export default Calculator