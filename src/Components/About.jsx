import React from 'react'
import { useNavigate } from 'react-router-dom'
export const About = () => {
    const navigate = useNavigate()
  return (
    <div>this is made by ashwinithebest <button type="button" onClick={()=>navigate(-1)} className="btn btn-secondary create g-col-4 m-2" >Go Back</button></div>
  )
}
