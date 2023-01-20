import React from 'react'
import { CaretDown,SkipEndFill } from "react-bootstrap-icons";

export default function Tab() {
    const mystyle={
        color:'black',
        display:'inline-block',margin:'0 85px',
        h4:{color:'black',marginLeft:'5px',textAlign:'center'},h5:{color:'#616161',textAlign:'center'},h2:{color:'#59981A',textAlign:'center'}
    }
  return (
    <>
    <ul className="nav justify-content">
        <li className="nav-item">
        <div style={mystyle}><h4 className="nav-link" style={mystyle.h4}>Created</h4>
        <h2  style={mystyle.h2}>593</h2>
        <h5 className=' my--3' style={mystyle.h5} >to yesterday</h5>
        <h4 style={{textAlign:'center',color:'#59981A'}}><CaretDown color="green" size={25}/>9%</h4></div>
        
        </li>
        <li className="nav-item">
        <div  style={mystyle}><h4 className="nav-link" style={mystyle.h4}>Unassigned</h4>
        <h2  style={mystyle.h2}>7</h2>
        <h5 className=' my--3' style={mystyle.h5}>to yesterday</h5>
       <h4 style={{textAlign:'center',color:'#59981A'}}><CaretDown color="green" size={25}/>25%</h4></div>
        
        </li>
        <li className="nav-item">
        <div  style={mystyle}><h4 className="nav-link" style={mystyle.h4}>Open</h4>
        <h2  style={mystyle.h2}>46</h2>
        <h5 className='my--3' style={mystyle.h5}>to yesterday</h5>
        <h4 style={{textAlign:'center',color:'#59981A'}}><CaretDown color="green" size={25}/>13%</h4></div>
        
        </li>
        <li className="nav-item">
        <div  style={mystyle}><h4 className="nav-link" style={mystyle.h4}>Solved</h4>
        <h2  style={mystyle.h2}>526</h2>
        <h5 className=' my--3' style={mystyle.h5}>to yesterday</h5>
        <h4 style={{textAlign:'center',color:'red'}}><CaretDown color="red" size={25}/>8%</h4></div>
        
        </li>
        <li className="nav-item">
        <div  style={mystyle}><h4 className="nav-link" style={mystyle.h4}>Escalated</h4>
        <h2  style={mystyle.h2}>2</h2>
        <h5  style={mystyle.h5}>to yesterday</h5>
        <h4 style={{textAlign:'center'}}><SkipEndFill color="grey" size={25} />0%</h4></div>
        </li>
        <li className="nav-item">
        <div  style={mystyle}><h4 className="nav-link" style={mystyle.h4} >Sydney</h4>
        <h2  style={mystyle.h2}>01:41 AM</h2>
        <h5  style={mystyle.h5}>Tuesday</h5>
        <h5 style={mystyle.h5}>18 DEc 2018</h5></div>
        
        </li>
    </ul>
    </>
  )
}
