import React from 'react';


const ToDoList = (props) => {
  return (
    <ul>
      { props.items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  )
}




export default ToDoList
