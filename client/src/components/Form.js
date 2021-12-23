import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import Header from './Header'

/*Form Component to add Pirates*/
const Form = () => {
    const [name,setName]=useState('');
    const [img,setImg]=useState('');
    const [numtreasure,setNumtreasure]=useState();
    const [catchphrase,setCatchphrase]=useState('');
    const [position,setPosition]= useState('');
    const [pegleg,setPegleg]=useState(true);
    const [eyepatch,setEyepatch]=useState(true);
    const [hookhand,setHookhand]=useState(true);
    const [errors,setErrors]=useState([]);
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/pirate', {
            name,
            img,
            numtreasure,
            catchphrase,
            position,
            pegleg,
            eyepatch,
            hookhand
        })
        .then(res=>console.log(res))
        .catch(err=>{
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            console.log("errorResponse",err.response);
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
            })
    }

    return (
        <div style={{backgroundColor:"#ff9900",width:"80%",margin:"0 auto"}}>
            <Header title="Add Pirate" withbutton={true} butText="Crew Board"/>
            {errors.map((err, index) => <p style={{color:"red"}} key={index}>{err}</p>)}
            <form onSubmit={onSubmitHandler} style={{display:"flex",justifyContent:"space-around"}} >
            <div style={{textAlign:"left"}}>
                <p><label>Pirate Name</label></p>
                <p><input type="text" onChange={e=>setName(e.target.value)}/></p>
                <p><label>img URL</label></p>
                <p><input type="text" onChange={e=>setImg(e.target.value)}/></p>
                <p><label>Number of treasure chests</label></p>
                <p ><input type="number" onChange={e=>setNumtreasure(e.target.value)} style={{width:"50px"}}/></p>
                <p><label>Pirate catch phrase</label></p>
                <p><textarea onChange={e=>setCatchphrase(e.target.value)}/></p>
            </div>
            <div>
                <p><label>Crew position</label></p>
                <p>
                    <select onChange={e=>setPosition(e.target.value)}>
                        <option value="">choose position</option>
                        <option value="Captain">Captain</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Boatswaim">Boatswaim</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                    </select>
                </p>
                <div style={{textAlign:"left"}}>
                    <p><input type="checkbox" id ="PegLeg" checked={pegleg} onChange={e=>setPegleg(e.target.checked)}/><label htmlFor="PegLeg" >Peg Leg</label> </p>
                    <p><input type="checkbox" id ="EyePatch" checked={eyepatch} onChange={e=>setEyepatch(e.target.checked)}/><label htmlFor="EyePatch" >Eye Patch</label> </p>
                    <p><input type="checkbox" id ="HookHand" checked={hookhand} onChange={e=>setHookhand(e.target.checked)}/><label htmlFor="HookHand" >Hook Hand</label> </p>
                    <button style={{backgroundColor:"#085394",height:"30px",width:"120px" ,color:"white"}}>Add Pirate</button>
                </div>
            </div>
            </form>
        </div>
    )
}

export default Form
