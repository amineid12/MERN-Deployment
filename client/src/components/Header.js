import { navigate } from '@reach/router'
import React from 'react'

/*Header Component with a color like Brown reUsed for all pages*/
const Header = (props) => {
    return (
        <div style={{backgroundColor:"#783f04",height:"70px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <h2 style={{flex:"4",color:"White",marginLeft:"10%"}}>{props.title}</h2>
            <div>
            {props.withbutton?<button  onClick={()=>props.butText==="Crew Board"?navigate("/pirates"):navigate("/pirate/new")} style={{flex:"1",marginRight:"50px",backgroundColor:"#085394",height:"30px",width:"120px",color:"white"}}>{props.butText}</button>:''}
            </div>
        </div>
    )
}

export default Header
