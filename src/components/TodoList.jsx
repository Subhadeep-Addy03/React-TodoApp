import React from 'react';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { MdEditSquare } from "react-icons/md";

const TodoList = ({ todo, delTodo,editTodo }) => {
    function handleDel(id) {
        delTodo(id)
    }
    function handleUpdate(todo) {
        editTodo(todo)
    }
    return (
        <>
            <div className='text-center mt-4'>
                {
                    todo.map((item) =>
                        <div className='bg-gray-200 m-6 p-1 font-bold' key={item.id}>

                            <div className='w=[40%] flex '>
                                <div className='w-[60%] ml-2'>{item.title}</div>
                                <div className='w-[10%]'>

                                    <button onClick={() => handleUpdate(item)} className='rounded bg-green-500 p-1 hover:bg-green-300 text-white hover:text-black'><MdEditSquare />
                                    </button>

                                    <button className='rounded bg-red-500 ml-3 p-1 hover:bg-red-300 text-white hover:text-black me-2' onClick={() => handleDel(item.id)}><RiDeleteBin5Fill />
                                    </button>

                                </div>


                            </div>

                        </div>)
                }
            </div>
        </>
    )
}

export default TodoList