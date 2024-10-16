import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const RegistrationForm = (e) => {

   let [set,setdata]=useState('')
   let [password,setpassword]=useState('')
   let [mail,setmail]=useState('')
   let navigate=useNavigate()
  
    function submit(){
        window.sessionStorage.setItem("name",set)
       window.sessionStorage.setItem("password",password)
       navigate('/Login')
    }

   console.log(set);
   
    return (
        <div className='maincontainer2'>
        <div className="container2">
            <h2 style={{marginLeft:'45px'}}>Register</h2>
            <form className='form2' onSubmit={submit}>
                <div className="input-group2">
                    
                    <input onChange={((e)=>{
                            setdata(e.target.value)
                    })} value={set} className='logtext2' type="text" id="username" name="username" placeholder='Username' required />
                    <input onChange={((e)=>{
                        setmail(e.target.value)
                    })}value={mail} type='email'className='logtext2' placeholder='email'></input>
                </div>
                <div className="input-group2">
                    <input onChange={((x)=>{
                        setpassword(x.target.value)
                    })} value={password} className='logpass2' type="password" placeholder='Password' id="password" name="password" required />
                </div>
                <div className='btndiv2'>
                <button   type="submit" className="button2">Login</button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default RegistrationForm;
