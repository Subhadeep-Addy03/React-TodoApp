import React from 'react'

const TodoList = ({ todo, delTodo }) => {
    function handleDel(id) {
        delTodo(id)
    }
    return (
        <>
            <div className='text-center mt-4'>
                {
                    todo.map((item) =>
                        <div className='bg-gray-200 m-3 p-1 font-bold' key={item.id}>{item.title}

                            <button className='rounded bg-red-500 ml-3 p-1 hover:bg-red-300 text-white hover:text-black me-2' onClick={() => handleDel(item.id)}>Delete
                            </button>

                            <button className='rounded bg-green-500 p-1 hover:bg-green-300 text-white hover:text-black'>Done
                            </button>
                        </div>)
                }
            </div>
        </>
    )
}

export default TodoList