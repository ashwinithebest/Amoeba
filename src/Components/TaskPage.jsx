import React from 'react'
import Homepage from './Homepage'
import { Link, Outlet } from 'react-router-dom'

const TaskPage = () => {
  return (
    <>
    <div class="d-flex justify-content-center p-2 ">
    <input className="border border-primary" type="search" placeholder='Search Products'></input>
    <Link to='complete' className='m-2'>Completed tasks</Link>
    <Link to='incomplete' className='m-2'>Not Completed tasks</Link>
    </div>
    <Outlet/>

    </>
  )
}

export default TaskPage