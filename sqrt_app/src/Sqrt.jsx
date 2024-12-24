import React from 'react'
import {useState, useRef} from 'react';
import axios from 'axios';

const Sqrt = () => {

    const rNum = useRef();
    const [num, setNum] = useState("");
    const [msg, setMsg] = useState("");
    const hNum = (e) =>{
        setNum(e.target.value);
    }

    const find = (e) =>{
        e.preventDefault();

        if(num === ""){
            alert("Please Enter a number");
            setMsg("")
            rNum.current.focus();
            return;
        }

        let url = 'https://sqrt-using-express-backend.onrender.com/find';
        let data = {params:{number:num}};

        axios.get(url,data)
        .then(res =>{
            setMsg(res.data.msg);
        })
        .catch(err=>{
            setMsg("Issue" +err)
        })
    }


  return (
    <div>
        <center>
            <h1> Square Root Finder Application Using Express and React</h1>
            <form onSubmit={find}>
                <input type='number' ref={rNum} onChange={hNum} step='any' placeholder='Enter a number'/>
                <br/><br/>
                <input type='submit' value='Find Square Root'/>
            </form>
            <h2> {msg} </h2>
        </center>
    </div>
  )
}

export default Sqrt