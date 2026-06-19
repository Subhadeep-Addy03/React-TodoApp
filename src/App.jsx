import React, { useState } from 'react'

const App = () => {
  const [val, setVal] = useState("")
  const [todo, setTodo] = useState([])
  function addTodo(params) {
    setTodo([...todo, { title: val, id: Date.now() }])
    setVal("")
  }
  return (
    <>
      <div className='text-center mt-32 text-3xl font-bold'>Todo App</div>

      <div className='text-center mt-5'>
        <input className="border border-3 me-3 bg-gray-300 p-2 rounded" onChange={(e) => setVal(e.target.value)} value={val} placeholder='Enter your Task' />
        <button className='bg-green-400 rounded p-2 hover:bg-orange-300 hover:text-white font-bold' onClick={addTodo}>Add Todo</button>
      </div>
      <div className='text-center mt-4'>
        {
          todo.map((item) => <div className='bg-gray-500 m-3 p-1 ' key={item.id}>{item.title}<button className='bg-red-400 ml-3 p-1'>Del</button> <button className='bg-green-400 p-1'>Done</button></div> )
        }
      </div>
    </>
  )
}

export default App