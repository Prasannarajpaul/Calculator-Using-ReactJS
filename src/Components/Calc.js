import React, { Component } from 'react'
import './calc.css'

class Calc extends Component {
    constructor(){
        super()
        this.state={
            output:""
        }
    }
    // numbers
    one(){
        this.setState(prevState =>({
            output:prevState.output +'1'
        }))
    }
    two(){
        this.setState(prevState =>({
            output:prevState.output +'2'
        }))
    }
    three(){
        this.setState(prevState =>({
            output:prevState.output +"3"
        }))
    }
    four(){
        this.setState(prevState =>({
            output:prevState.output +"4"
        }))
    }
    five(){
        this.setState(prevState =>({
            output:prevState.output +"5"
        }))
    }
    six(){
        this.setState(prevState =>({
            output:prevState.output +"6"
        }))
    }
    seven(){
        this.setState(prevState =>({
            output:prevState.output +"7"
        }))
    }
    eight(){
        this.setState(prevState =>({
            output:prevState.output +"8"
        }))
    }
    nine(){
        this.setState(prevState =>({
            output:prevState.output +"9"
        }))
    }
    zero(){
        this.setState(prevState =>({
            output:prevState.output +"0"
        }))
    }
    // symbols
    divide(){
        this.setState(prevState =>({
            output:prevState.output +"/"
        }))
    }
    multiplication(){
        this.setState(prevState =>({
            output:prevState.output +"*"
        }))
    }
    addition(){
        this.setState(prevState =>({
            output:prevState.output + '+'
        }))      
    }
    subtraction(){
        this.setState(prevState =>({
            output:prevState.output +"-"
        }))
    }
    dot(){
        this.setState(prevState =>({
            output:prevState.output +"."
        }))
    }
    //functions
    clear(){
        this.setState({
            output:""
        })
    }
    drop(){
        this.setState(prevState =>({
            output:prevState.output.slice(0, -1)
        }))
    }
    equals(){
        try{
        const result = eval((this.state.output).toString());
        // window.prompt(result.toString())
        // const result = math.evaluate (this.state.output)
        this.setState({
            output : result.toString()
        })
        }
        catch (error){
            this.setState({
                output:"Invalid Input"
            })
        }
    }
    //mounting
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
      }
      
      componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
      }
    //input from keyboard
    handleKeyDown = (event) => {
        const { key } = event;
        // window.prompt(key)
        switch(key){
            case '1':this.one();break;
            case '2':this.two();break;
            case '3':this.three();break;
            case '4':this.four();break;
            case '5':this.five();break;
            case '6':this.six();break;
            case '7':this.seven();break;
            case '8':this.eight();break;
            case '9':this.nine();break;
            case '+':this.addition();break;
            case '-':this.subtraction();break;
            case '*':this.multiplication();break;
            case '/':this.divide();break;
            case '.':this.dot();break;
            case 'Delete':this.drop();break;
            case 'Enter':this.equals();break;
        }
        };
        

    //render
    render() {
    return (
        <div className="cal">
            <h1 className="result">{this.state.output}</h1>
        <div>
            <button className="big" onClick={()=>this.clear()}>Clear</button>
            <button onClick={()=>this.drop()}>C</button>
            <button onClick={()=>this.divide()}>/</button>
        </div>
        <div>
            <button onClick={()=>this.seven()}>7</button>
            <button onClick={()=>this.eight()}>8</button>
            <button onClick={()=>this.nine()}>9</button>
            <button onClick={()=>this.multiplication()}>*</button>
        </div>
        <div>
            <button onClick={()=>this.four()}>4</button>
            <button onClick={()=>this.five()}>5</button>
            <button onClick={()=>this.six()}>6</button>
            <button onClick={()=>this.subtraction()}>-</button>
        </div>
        <div>
            <button onClick={()=>this.one()}>1</button>
            <button onClick={()=>this.two()}>2</button>
            <button onClick={()=>this.three()}>3</button>
            <button onClick={()=>this.addition()}>+</button>
        </div>
            <button onClick={()=>this.zero()}>0</button>
            <button onClick={()=>this.dot()}>.</button>
            <button className="big" onClick={()=>this.equals()}>=</button>
        </div>
    )
    }
}

export default Calc