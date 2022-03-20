import React, { useState } from 'react'

function Login() {
    const [state, setState] = useState({
        dbData1: [],
    })
    const handleChange = (e)=>{
        setState({
            [e.target.name] : e.target.value,
        })
    }
    const logUp = ()=>{
        const ids ={
            inid: this.state.text,
        };
        fetch("http://localhost:3000/SignUp", {
        method: "post",
        header: {
            "content-type": "aplication/json",
        },
        body:JSON.stringify(ids),
    });
    };
  return (
    <div>
        <input name="text" onChange={handleChange}></input>
        <button onClick={logUp}>전송</button>
        <h2>{state}</h2>
    </div>
  )
}

export default Login