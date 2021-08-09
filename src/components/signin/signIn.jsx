import { useState } from 'react';
import axios from 'axios';
import './signIn.css';
function SignIn() {
    const [state, setState] = useState({
        phone: "",
        password: "",
        otp:""
    });

    function handleChange(e) {
        setState({
            ...state,
           [e.target.name]:e.target.value
        })
    }

    function login(){
        let data=state;
        axios.post("http://192.168.43.235:5000/auth/login",data)
        .then(console.log("sent"));
    }

    function otp(){
        axios.post("http://192.168.43.235:5000/auth/otp",state)
        .then(console.log("sent"));
    }

    let count=1;
    function Switch(){
        const posi=document.querySelector(".authForm");
        if(count){
            posi.style.left="0px";
            count--;
        }else{
             posi.style.left="-400px";
             count++;
        }
       
    }

    function register(){
        axios.post("http://192.168.43.235:5000/auth/register",state)
        .then(console.log("sent"));
    }

    return (
        <>
            <h1>Hello Ninja !!</h1>
            <h2>Log in before furthur proceding.</h2>
            <div className="container">
            <div className="authForm">
                <div className="login">
                    <h1>Login</h1>
                    <input className="loginInput" placeholder="Phone Number" name="phone" maxLength="10" onChange={(e) => { handleChange(e) }} ></input>
                    <input className="loginInput" placeholder="Password" name="password" maxLength="10" onChange={(e) => { handleChange(e) }} ></input>
                    <button className="loginbtn" onClick={login} >Login</button>
                    <button className="signupbtn" onClick={Switch}>Create New Account</button>
                </div>
                <div className="signup">
                    <h1>Register</h1>
                    <input className="registerInput" placeholder="Phone Number" name="phone" maxLength="10" onChange={(e) => { handleChange(e) }}></input><span className="spanInput1" onClick={otp}>Send OTP</span>
                    <input className="registerInput" placeholder="OTP" name="otp" maxLength="4" onChange={(e) => { handleChange(e) }} ></input>
                    <input className="registerInput" placeholder="Password" name="password" maxLength="10" onChange={(e) => { handleChange(e) }}></input>
                    <button className="signupbtn"  onClick={register}>Create New Account</button>
                    <button className="signupbtn" onClick={Switch}>Already Exist</button>
                </div>
            </div>    
            </div>
            <div className="socialSignIn">
            -----------------Quick Sign In Coming Soon------------------
            <div classname="special">
                <button><i className="fa fa-google" aria-hidden="true"></i></button>
                <button><i className="fa fa-facebook" aria-hidden="true"></i></button>
            </div>
            
            </div>

        </>)
}

export default SignIn;