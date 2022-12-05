import React, { useState } from 'react';

import './thirdPage.css'
import { useNavigate } from 'react-router';

const ThirdPage = () => {

    const [password,setPass]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(password);

    }
    const navigate=useNavigate('')
    return (
        <div className='page1'>
        <div className='firstDiv'>
            <div className='logo'><img src='../Images/ultimate hrm logo.png' alt=''/></div>
            <div className='image'><img src='../Images/istockphoto.png' alt=''/></div>

        </div>
        <div className='secondDiv3'>
            <form action='' onSubmit={handleSubmit}>
                <h2>SignUp Form</h2>
                <input className='input3' value={password} onChange={(e)=>setPass(e.target.value)} type="password" name='password' placeholder="WRITE PASSWORD"></input><hr></hr>
                <input className='input-3' type="text" name='' placeholder="password must be 8 characters" disabled></input>
                <br/><br/>
               
            <div className='btn-class'>
                <div>
                <button type='submit' onClick={()=>navigate('/register1')} className='back3'>Back</button>
                </div>
                <div>
                <button onClick={()=>navigate('/register3')} className='btn-img3'>Sign Up</button>
                </div>
            </div>
               
               
            </form>
            


        

        </div>
    </div>
    );
};

export default ThirdPage;