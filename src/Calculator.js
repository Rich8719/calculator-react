import React, { Component } from "react"
import './calculator.css'

function NumberButtons(props) {
    return(
        <button className="number-button">
            {props.value}
        </button>
    )
}

function OperatorButtons(props) {
    return(
        <button className = "operator-buttons">
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

    renderNumberButtons(i){
        return(
            <NumberButtons
                value={i}
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
            <div className = 'number-keypad' >
                <div className = "button-row">
                    {this.renderNumberButtons(7)}
                    {this.renderNumberButtons(8)}
                    {this.renderNumberButtons(9)}
                    {this.renderOperatorButtons('+')}
                </div>
                <div className="button-row">                 
                    {this.renderNumberButtons(4)}
                    {this.renderNumberButtons(5)}
                    {this.renderNumberButtons(6)}
                    {this.renderOperatorButtons('-')}
                </div>
                <div className="button-row">                 
                    {this.renderNumberButtons(1)}
                    {this.renderNumberButtons(2)}
                    {this.renderNumberButtons(3)}
                    {this.renderOperatorButtons('/')}
                </div>
                <div className="button-row">
                    {this.renderNumberButtons(0)}
                    {this.renderNumberButtons('A/C')}
                    {this.renderOperatorButtons('=')}
                    {this.renderOperatorButtons('X')}
                </div>
            </div >
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
                {this.renderDisplay(9)}
            </div>
        )
    }

}

class Calculator extends Component{
    render(){
        return(
            <div>
                <Display/>
                <Keypad/>
            </div>
        )
    }
}

export default Calculator