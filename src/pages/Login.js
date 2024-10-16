import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = (e) => {
    let [logname,setname]=useState('')
    let [logpass,setpass]=useState('')
    let navigate=useNavigate()
   let name=window.sessionStorage.getItem("name")
   let pass=window.sessionStorage.getItem("password")

    function vaild(){
        if(logname===name && pass===logpass){
            navigate('/')
        }
        
        else{
            alert("Invalid username and password,click register for  new account")

        }
    }
   
    
    
    return (
        <div className='maincontainer'>
        <div className="container">
            <h2 style={{marginLeft:'45px'}}>Login</h2>
            <form className='form' onClick={vaild}>
                <div className="input-group">
                    
                    <input onChange={((e)=>{
                        setname(e.target.value)
                    })} value={logname} pattern='[a-z]{0,5}'  className='logtext' type="text" id="username" name="username" placeholder='Username' required />
                </div>
                <div className="input-group">
                    <input onChange={((e)=>{
                        setpass(e.target.value)
                    })} value={logpass}  className='logpass' pattern='{0,10}' type="password" placeholder='Password' id="password" name="password" required />
                </div>
                <div className='btndiv'>
                <button  type="submit" className="button">Login</button>
                <Link to='/Register'><button type='submit' className='button'>Register</button></Link>
                </div>
            </form>
        </div>
        </div>
    );
};

export default LoginForm;

