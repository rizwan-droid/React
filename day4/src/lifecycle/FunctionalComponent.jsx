import React, { useEffect, useState } from 'react'

export default function FunctionalComponent() {
let[counter,setcoounter]=useState(0);

    const Increment=()=>{
        setcoounter(counter+1);
    }

    let[counter1,setcoounter1]=useState(0);

    const Increment1=()=>{
        setcoounter1(counter1+1);
    }
    useEffect(()=>{
        console.log('run as a component did mount');
    })

    useEffect(()=>{
        console.log('running without dependency');
    },[])

    useEffect(()=>{
        console.log('running with dependency');
    },[counter1])

  return (
    <div>
    <div>
      <p>Counter: {counter}</p>
      <button onClick={Increment}>Increment</button>
    </div>
    <div>
    <p>Counter1: {counter1}</p>
    <button onClick={Increment1}>Increment1</button>
    </div>
    </div>
  )
}
