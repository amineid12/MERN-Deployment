import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import List from '../components/List'
import Header from '../components/Header'

/*Main Component that gets All Pirates and includes the List component to show them*/
const Main = () => {
    const [pirates, setPirates] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/pirates')
            .then(res=>{
                setPirates(res.data);
                setLoaded(true);
            });
    },[])

    /* Remove a pirate from the front end method */
    const removeFromDom = Id => {
        setPirates(pirates.filter(pirate => pirate._id != Id));
    }

    return (
        <div style={{backgroundColor:"#ff9900",width:"80%",margin:"10px auto",paddingBottom:"20px"}}>
            <Header title="Pirate Crew" withbutton={true} butText="Add Pirate"/>
            {loaded && pirates.map((pirate,idx)=>
            <List key={idx} removeFromDom={removeFromDom} img={pirate.img} name={pirate.name} id={pirate._id} />)}
        </div>
    )
}

export default Main
