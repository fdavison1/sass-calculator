import React from 'react'

class Calculator extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            stack: [ '=' ],
            display: '0'
        }
    }
    numberPressed(val){
        const s = this.state
        if (typeof s.stack[s.stack.length - 1] !== 'number'){
            s.display = val
            s.stack.push(parseInt(s.display, 10))
        } else {
            s.display += val
            s.stack[s.stack.length - 1] = parseInt(s.display, 10)
        }
        this.setState(s)
    }
    operatorPressed(val){

    }
    render(){
        return (
            <div className="calculator-container"></div>
        )
    }
}