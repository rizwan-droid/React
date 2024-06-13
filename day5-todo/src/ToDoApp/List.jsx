import React from "react";

export default function List(props) {
    console.log('data coming from parent', props);
  return (
    <div>
      <ul className="list-group">
      {
        props.todos.length>0 ? props.todos.map((value,index,array)=>{
            return      <li className="list-group-item" key={index}>{value}</li>

        }) : <li className="list-group-item">No todo found</li>
      }
      </ul>
    </div>
  );
}
