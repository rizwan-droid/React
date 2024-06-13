import React, { useState } from "react";
import Input from "./Input";
import List from "./List";

export default function App() {
    let[todos,settodos]=useState(["breakfast","lunch","dinner"]);
    console.log(todos);

  return( 
  <div className="container mt-5">
  <Input/>
  <List todos={todos}/>

  </div>
  )
}
