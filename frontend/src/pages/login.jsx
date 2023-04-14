import React, { useState } from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);

    const onSubmit = () => {
        const payload = {
            email, password
        }

        setLoader(true);
        axios.post("https://udemy-shubham-sahoo-server.vercel.app/login", payload)
        .then(res=>{
            console.log(res);
            if(res.data.message){
                setLoader(false);
                alert(res.data.message);
                localStorage.setItem("user", JSON.stringify(res.data))
                navigate("/")
            }
            else{
                alert("Wrong credentials")
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
            <h1>Login</h1>
            <div>
                <input type="email" placeholder='Type your email' onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder='Type your password' onChange={(e)=>setPassword(e.target.value)} />
                <button onClick={onSubmit} >{loader===true ? "Wait.." : "Login"}</button>
            </div>
        </div>
        </div>
    )
}

export default Login
