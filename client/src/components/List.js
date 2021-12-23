import React from 'react'
import axios from 'axios'
import {navigate} from '@reach/router'

/*List Component which is reUsable for each pirate inside the Main component*/
const List = (props) => {
    const { removeFromDom,img,name ,id} = props;

    /*Delete Pirate Method*/ 
    const deletePirate = (pId) => {
        axios.delete('http://localhost:8000/api/pirate/' + pId)
            .then(res => {
                removeFromDom(pId)
            })
    }

    return (
        <div style={{width:"80%",backgroundColor:"white",margin:"30px auto",display:"flex",alignItems:"center"}}>
            <div style={{flex:"1"}}>
            <img style={{width:"50%",height:"80%",maxWidth:"150px",maxHeight:"80px"}} src={img}></img></div>
            <div style={{flex:"2"}}>  <h4>{name}</h4>
            <button style={{backgroundColor:"#085394",height:"30px",width:"120px",margin:"20px", color:"white"}} onClick={()=>navigate("/pirate/"+id)}> View Pirate</button>
            <button style={{backgroundColor:"#cf2a27",height:"30px",width:"120px",margin:"20px",color:"white"}} onClick={()=>deletePirate(id)}> Walk the Plank</button>
            </div>
        </div>
    )
}

export default List
