import React, {Component} from 'react';

class Calculator extends Component {
    constructor (props) {
        super()
        this.state = {
          number: " ",
          newNum: " ",
          results: "results"
        }
      } 

    setNum = (e, num) => {
        this.setState({ [num]: e.target.value});
      }

    addNumber= e => {
        let results = parseInt(this.state.num1)+parseInt(this.state.num2)
        this.setState({results: results})
    } 

    subtractNumber= e => {
        let results = parseInt(this.state.num1)-parseInt(this.state.num2)
        this.setState({results: results})
    } 

    render(){
        return (
            <div className="container">
                <h1>Add with React!</h1>
                <div className="add">
                <input type="number"
                    name="num1"
                    placeholder="first number"
                    value={this.state.num1}
                    onChange={ (e) => this.setNum(e, 'num1') }
                    />      
                <span onClick={(e)=> this.addNumber(e)}>+</span>
                <span onClick={(e)=> this.subtractNumber(e)}>-</span>
                <input type="number"
                    name="num2"
                    placeholder="second number"
                    value={this.state.num2}
                    onChange={ (e) => this.setNum(e, 'num2') }
                    />
                {/* <button onClick={(e) => this.addNumber(e)}>=</button> */}
                <h3>{this.state.results}</h3>
                </div>
            </div>
        )
    }
}

export default Calculator