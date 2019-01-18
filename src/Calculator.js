import React, { Component } from "react"
import './calculator.css'

function NumberButtons(props) {
    return(
        <button className="number-button">
            {props.value}
        </button>
    )
}

class Keypad extends Component {

    renderNumberButtons(i){
        return(
            <NumberButtons
                value={this.props.NumberButtons[i]}
            />
        )
    }


    render() {
        return(
            <div className = 'number-keypad' >
                { this.renderNumberButtons(1) }
                { this.renderNumberButtons(2) }
                { this.renderNumberButtons(3) }
                { this.renderNumberButtons(4) }
                { this.renderNumberButtons(5) }
                { this.renderNumberButtons(6) }
                { this.renderNumberButtons(7) }
                { this.renderNumberButtons(8) }
                { this.renderNumberButtons(9) }
            </div >
        )

    }
}


class Calculator extends Component{
    render(){
        return(
            <Keypad/>
        )
    }
}

export default Calculator