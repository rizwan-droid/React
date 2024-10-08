import React, { Component, createRef } from 'react'

export default class ClassRef extends Component {
    constructor(){
        super();

        this.inputref=createRef();

    }

    changeinput=()=>{
        console.log(this.inputref.current.value);
        console.log(this.inputref.current.value.length);
        if(this.inputref.current.value.length===0){
            this.inputref.current.style.backgroundColor="red";
        }else{
            this.inputref.current.style.backgroundColor="green";
        }
    }
  render() {
    return (
      <div>
        <div>I am class ref</div>
        <input type='text' ref={this.inputref} onChange={this.changeinput}></input>
      </div>
    )
  }
}
