import React from 'react'
import { useNavigate,useSearchParams } from 'react-router-dom'

const Homepage = () => {
    const navigate = useNavigate() //used to navigate programmatically
    //using search parameters
    const [searchParams,setSearchParams] =useSearchParams()
    const display = searchParams.get('filter') === 'active'

  return (
    <>
    <div className="grid text-center">
    <button type="button" onClick={()=>navigate('/about')} className="btn btn-secondary create g-col-4 m-2" >About</button>
    <button type="button" onClick={()=>setSearchParams({filter:'active'})} className="btn btn-secondary create g-col-4 m-2">SearchParams</button>
    <button type="button" onClick={()=>setSearchParams()} className="btn btn-secondary create g-col-4 m-2">removeURLParams</button>
  </div>
  {display?<h1>active</h1>:<h3>Inactive</h3>}
  </>
  )
}

export default Homepage