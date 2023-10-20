import React, { useState } from "react";
import ToDoApp from './src'


const toDoList = [
  {
    id: 0,
    text: 'Jeden',
    done: false
  },
  {
    id: 1,
    text: 'Dwa',
    done: false
  },
  {
    id: 2,
    text: 'Trzy',
    done: false
  }
]


export default function App() {

  const [list, setList] = useState(toDoList)

  const changeStatus = (id) => {
    setList(list.map(item => {

      return item.id === id ? { ...item, done: !item.done } : item

    }))
  }


  return (
    <ToDoApp toDoList={list} changeStatus={changeStatus} />
  );
}
