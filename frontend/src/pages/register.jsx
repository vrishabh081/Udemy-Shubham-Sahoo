import React, { useState } from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);

    const onSubmit = () => {
        const payload = {
            name, email, password
        }

        setLoader(true);
        axios.post("http://localhost:8080/register", payload)
        .then(res=>{
            if(res.data.message){
                setLoader(false);
                alert(res.data.message);
                navigate("/login")
            }
        })
        .catch(err=>{
            console.log(err)
            setLoader(false);
        })
    }

    return (
        <div>
        <div id='sign-up'>
            <h1>Register</h1>
            <div>
                <input type="text" placeholder='Type your name' onChange={(e)=>setName(e.target.value)} />
                <input type="email" placeholder='Type your email' onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder='Type your password' onChange={(e)=>setPassword(e.target.value)} />
                <button onClick={onSubmit} >{loader===true ? "Wait.." : "Submit"}</button>
            </div>
        </div>
        </div>
    )
}

export default Register
