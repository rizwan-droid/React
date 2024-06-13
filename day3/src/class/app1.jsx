import React, { Component } from 'react'

export default class app1 extends Component {

  constructor(){
    super();
    this.state={
      counter:0,
    }
  }

  // counter =0;

  increment=()=>{
    console.log("inc fun fired");
    // this.counter++;
    // console.log(this.counter);
    this.setState({
      counter:this.state.counter+1,
    })
  }


  render() {
    return (
      <div className='App'>
        counter app using class compnent
        <p>counter: {this.state.counter}</p>
        <button onClick={this.increment}>clickme</button>
      </div>
    )
  }
}
