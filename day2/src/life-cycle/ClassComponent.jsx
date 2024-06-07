import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(){
        super();
        console.log("constructor called");

        this.state={
            counter:0,
        }
    }


    componentDidMount(){
        console.log("component did mount chal gaya");
    }

    componentWillUnmount(){
        console.log("compoent unmount chal gaya");
    }

    // shouldComponentUpdate(nextprops,nextstate){
    //     if(this.state.counter!==nextstate.counter){
    //         console.log('next state--', nextstate);
    //         console.log('counter value--', this.state.counter);
    //         return true;
    //     }else{
    //         console.log('next state--', nextstate);
    //         console.log('counter value--', this.state.counter);
    //         return false;
    //     }
    // }

    getSnapshotBeforeUpdate(){
        console.log('snapshot fired');
    }

    componentDidUpdate(prevstate){
        console.log('comp did update fired');
        return prevstate.counter;
    }

    
    increment=()=>{
        console.log("increment function fire");
        this.setState({
        count:this.state.counter++,
        })
    }

  render() {
    return (
      <div className='App'>
      Class Component
      <p>counter : {this.state.counter}</p>
        <button onClick={this.increment}>click to increase</button>
      </div>
    )
  }
}
