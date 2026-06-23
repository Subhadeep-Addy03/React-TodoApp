import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
    const [val, setVal] = useState("")
    function handleAdd() {
        addTodo(val)
        setVal("")
    }

    return (
        <>
            <div className='text-center mt-5'>
                <input className="border border-3 me-3 bg-gray-200 p-3 rounded"
                    onChange={(e) => setVal(e.target.value)}

                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleAdd()
                        }
                    }}
                    value={val} placeholder='Enter your Task' />
                <button className='bg-green-400 rounded p-3 hover:bg-orange-300 hover:text-white font-bold' onClick={handleAdd}>Add Todo</button>
            </div>
        </>
    )
}

export default TodoForm