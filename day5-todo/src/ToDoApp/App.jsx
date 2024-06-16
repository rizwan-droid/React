import React, { useState } from "react";
import Input from "./Input";
import List from "./List";

export default function App() {
    let[todos,settodos]=useState(["breakfast","lunch","dinner"]);
    // console.log(todos);

    const addtodo=(value)=>{
      console.log('values',value);
      settodos([...todos,value])
    }

    const deletetodo=(value)=>{
      // todos.slice(index,1)
   let filterdata = todos.filter((todo)=>todo===value);
   console.log(filterdata);
  settodos(filterdata);

    }
  return( 
  <div className="container mt-5">
  <Input addtodo={addtodo}/>
  <List todos={todos} deletetodo={deletetodo}/>

  </div>
  )
}
