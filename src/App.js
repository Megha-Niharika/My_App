import React from "react"
import './style.css'
import TodoItem from "./TodoItem"
import Todosdata from "./TodosData"

function App()
{
const todoItems = Todosdata.map(item => <TodoItem key={item.id} item={item}/>)
 return (
 <div>
   
   {todoItems}
{/* <TodoItem/>

<TodoItem/>

<TodoItem/>

<TodoItem/> */}
</div>
 )

}


export default App;
