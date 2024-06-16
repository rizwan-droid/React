import React, { useState } from "react";

export default function Input(props) {
  console.log('props coming from parent/app compoenent', props);
  let[todo,settodo]=useState('')
  let[error,seterror]=useState(false)

  const changeinput=(event)=>{
    // console.log('change input function fire');
    // console.log(event.target.value);
    settodo(event.target.value);
    if(event.target.value.length>0){
      seterror(false)
    }else{
      seterror(true)
    }
  
    console.log(todo);
  
  }

  const submit=(event)=>{
    event.preventDefault();
    // console.log('submit function fire');
   
    if(todo.length>0){
      props.addtodo(todo)
    }else{
      seterror(true)
    }
    settodo('')
  }
  return (
    <div>
      <form className="row g-3" onSubmit={submit}>
        <div className="col-10">
          <input type="text"
           placeholder="Enter ToDo" 
           value={todo}
            onChange={changeinput}
           />


           {
            error && <p className="text-danger">error! please add some todos</p>
           }

           
        </div>

        <div className="col-2">
          <button type="submit" className="btn btn-primary mb-3">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
