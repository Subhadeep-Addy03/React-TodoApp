// import React, { useState } from 'react'


// const App = () => {
//   const [val, setVal] = useState("")
//   const [todo, setTodo] = useState([])
//   function addTodo() {
//     if (val.trim() === "") {
//       alert("Please Enter The Task")
//       return
//     }
//     setTodo([...todo, { title: val, id: Date.now() }])
//     setVal("")
//   }
//   return (
//     <>
//       <div className='text-center mt-32 text-4xl font-bold'>Todo List</div>

//     //Todo Form starts Here
//       <div className='text-center mt-5'>
//         <input className="border border-3 me-3 bg-gray-200 p-3 rounded" onChange={(e) => setVal(e.target.value)} value={val} placeholder='Enter your Task' />
//         <button className='bg-green-400 rounded p-3 hover:bg-orange-300 hover:text-white font-bold' onClick={addTodo}>Add Todo</button>
//       </div>

//     //Todo List start
//       <div className='text-center mt-4'>
//         {
//           todo.map((item) => <div className='bg-gray-200 m-3 p-1 font-bold' key={item.id}>{item.title}<button className='rounded bg-red-500 ml-3 p-1 hover:bg-red-300 text-white hover:text-black me-2'>Delete</button> <button className='rounded bg-green-500 p-1 hover:bg-green-300 text-white hover:text-black'>Done</button></div>)
//         }
//       </div>
//     </>
//   )
// }

// export default App



//File separation (props concept) 

// import React, { useState } from 'react'
// import TodoForm from './components/TodoForm'
// import TodoList from './components/TodoList'


// const App = () => {
//   const [todo, setTodo] = useState([])
//   function addTodo(val) {
//     if (val.trim() === "") {
//       alert("Please Enter The Task")
//       return
//     }
//     setTodo([...todo, { title: val, id: Date.now() }])
//   }
//   return (
//     <>
//       <div className='text-center mt-32 text-4xl font-bold'>Todo List</div>
//       <TodoForm addTodo={addTodo} />
//       <TodoList todo={todo} />
//     </>
//   )
// }

// export default App

//Local Storage

// import React, { useEffect, useState } from 'react'
// import TodoForm from './components/TodoForm'
// import TodoList from './components/TodoList'

// const App = () => {

//   const [todo, setTodo] = useState(() => {
//     const saveTodo = localStorage.getItem("TodoFolder")
//     return saveTodo ? JSON.parse(saveTodo) : []
//   })

//   function addTodo(val) {
//     if (val.trim() === "") {
//       alert("Please Enter The Task")
//       return
//     }
//     setTodo([...todo, { title: val, id: Date.now() }])
//   }

//   useEffect(() => {
//     localStorage.setItem("TodoFolder", JSON.stringify(todo));
//   }, [todo])

//   return (
//     <>
//       <div className='text-center mt-32 text-4xl font-bold'>Todo List</div>
//       <TodoForm addTodo={addTodo} />
//       <TodoList todo={todo} />
//     </>
//   )
// }

// export default App


//Delete Todo 

import React, { useEffect, useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import toast from 'react-hot-toast'

const App = () => {

  const [todo, setTodo] = useState(() => {
    const saveTodo = localStorage.getItem("TodoFolder")
    return saveTodo ? JSON.parse(saveTodo) : []
  })

  function addTodo(val) {
    if (val.trim() === "") {
      alert("Please Enter The Task")
      return
    }
    setTodo([...todo, { title: val, id: Date.now() }])
    toast.success("Todo Added Success !")
  }

  function delTodo(id) {
    setTodo(todo.filter((item) => item.id !== id))
    toast.success("One Todo Deleted !")
  }

  useEffect(() => {
    localStorage.setItem("TodoFolder", JSON.stringify(todo));
  }, [todo])

  return (
    <>
      <div className='text-center mt-32 text-4xl font-bold'>Todo List</div>
      <TodoForm addTodo={addTodo} />
      <TodoList todo={todo} delTodo={delTodo} />
    </>
  )
}

export default App