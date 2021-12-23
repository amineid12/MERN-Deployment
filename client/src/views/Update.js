import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import Header from '../components/Header'

/*Update Component get One Pirate and allow changing the 3 attributes pegleg,eyepatch,hookhand*/
const Update = (props) => {
    const { id } = props;
    const [pirate, setPirate] = useState({});
    const [pegleg,setPegleg] =useState();
    const [eyepatch,setEyepatch]=useState();
    const [hookhand,setHookhand]=useState();

    /*get one Pirate Method */
    useEffect(() => {
        axios.get('http://localhost:8000/api/pirate/' + id)
            .then(res => {
                setPirate(res.data);
                setPegleg(res.data.pegleg);
                setEyepatch(res.data.eyepatch);
                setHookhand(res.data.hookhand);

            })
    }, [pegleg,eyepatch,hookhand])

    /*Update one Pirate Method */
    const updatePirate = (e,i) => {
        e.preventDefault();
        if(i==0){
        axios.put('http://localhost:8000/api/pirate/' + id, {
            pegleg:!pegleg
        })
        .then(res => {console.log(res);setPegleg(!pegleg)});
        }
        else if(i==1){
        axios.put('http://localhost:8000/api/pirate/' + id, {
            eyepatch:!eyepatch
        })
        .then(res => {console.log(res);setEyepatch(!eyepatch)});
            }
        else if(i==2){
        axios.put('http://localhost:8000/api/pirate/' + id, {
            hookhand:!hookhand
                })
        .then(res => {console.log(res);setHookhand(!hookhand)});
                }
    }

    return (
        <div style={{backgroundColor:"#ff9900",width:"80%",margin:"0 auto"}}>
            <Header title={pirate.name} withbutton={false}/>
            <div style={{display:"flex",justifyContent:"space-around",alignItems:"start",margin:"0 auto"}}>
                <div style={{width:"30%",height:"30%" ,margin:"20px auto"}}>
                    <img src={pirate.img} style={{width:"70%",height:"100%",maxWidth:"280px",maxHeight:"140px"}}></img>
                    <h2 style={{width:"70%",margin:"20px auto"}}>"{pirate.catchphrase}"</h2> 
                </div>
                <div style={{width:"40%",height:"90%",backgroundColor:"white",margin:"20px auto"}}>
                    <h2>About</h2>
                    <table>
                        <tr><td style={{padding:"20px", textAlign:"left"}}>Position:   {pirate.position}</td><td></td></tr>
                        <tr><td style={{padding:"20px", textAlign:"left"}}>Treasures:  {pirate.numtreasure}</td><td></td></tr>
                        <tr><td style={{padding:"20px", textAlign:"left"}}>Peg Leg:   {pirate.pegleg?'yes':'No'} </td><td><button onClick={(e)=>updatePirate(e,0)} style={pirate.pegleg?{backgroundColor:"#cf2a27",color:"white",width:"60px"}:{backgroundColor:"green",color:"white",width:"60px"}}>{!pirate.pegleg?'yes':'No'}</button></td></tr>
                        <tr><td style={{padding:"20px", textAlign:"left"}}>Eye Patch:   {pirate.eyepatch?'yes':'No'} </td><td><button onClick={(e)=>updatePirate(e,1)} style={pirate.eyepatch?{backgroundColor:"#cf2a27",color:"white",width:"60px"}:{backgroundColor:"green",color:"white",width:"60px"}}>{!pirate.eyepatch?'yes':'No'}</button></td></tr>
                        <tr><td style={{padding:"20px", textAlign:"left"}}>Hook Hand:   {pirate.hookhand?'yes':'No'} </td><td><button onClick={(e)=>updatePirate(e,2)} style={pirate.hookhand?{backgroundColor:"#cf2a27",color:"white",width:"60px"}:{backgroundColor:"green",color:"white",width:"60px"}}>{!pirate.hookhand?'yes':'No'}</button></td></tr>
                    </table>
                </div>
             </div>
        </div>
    )
}

export default Update
