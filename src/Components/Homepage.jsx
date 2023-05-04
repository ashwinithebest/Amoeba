import React from 'react'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
    const navigate = useNavigate() //used to navigate programmatically
  return (
    <div class="grid text-center">
    <button type="button" onClick={()=>navigate('about')} className="btn btn-secondary create g-col-4 m-2" >About</button>
    <button type="button" className="btn btn-secondary create g-col-4 m-2">Edit</button>
    <button type="button" className="btn btn-secondary create g-col-4 m-2">Delete</button>
  </div>
  )
}

export default Homepage