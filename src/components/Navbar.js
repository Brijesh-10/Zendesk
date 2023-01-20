import React, { useState , useEffect } from 'react'
import logo from '../pic/zen.png'
export default function Datetime() {

        var [date,setDate] = useState(new Date());
        
        useEffect(() => {
            var timer = setInterval(()=>setDate(new Date()), 1000 )
            return function cleanup() {
                clearInterval(timer)
            }
        
        });

  return (
    <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{background:'#59981A', color:'white',maxHeight:'37px'}}>
  <div className="container-fluid">
    <img src={logo}  style={{height:'25px',width:'30px',paddingRight:'10px'}}alt="React"/>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <h4>Daily Operational</h4>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <ul className="nav justify-content-end">
  <li className="nav-item">
    <h5>Berlin Local Time: {date.toDateString()}  {date.getHours()}:{date.getMinutes()}</h5>
  </li>
</ul>
      </form>
    </div>
  </div>
</nav>
</>
  )
}