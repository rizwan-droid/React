import React, { useRef } from 'react'

export default function FunctionalRef() {
    let inputref=useRef()
    console.log(inputref);

    const changeinput=(value)=>{
        console.log(inputref.current.value);
        console.log(inputref.current.value.length);
        if(inputref.current.value.length===0){
            inputref.current.style.backgroundColor="red";
        }else{
            inputref.current.style.backgroundColor="green";
        }
        
    }
  return (
    <>
        <div>I am functional ref</div>
        <input type='text' ref={inputref} onChange={changeinput}></input>
    </>
  )
}
