import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import './secondPage.css';
import {  useNavigate } from "react-router-dom";

const SecondPage = () => {

    const [phone,setphone]=useState('');
    const [email,setEmail]=useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(phone,email);
    }

const navigate=useNavigate('')
    return (
        <div className='page1'>
        <div className='firstDiv'>
            <div className='logo'><img src='../Images/ultimate hrm logo.png' alt=''/></div>
            <div className='image'><img src='../Images/istockphoto.png' alt=''/></div>

        </div>
        <div className='secondDiv2'>
            <form action='' onSubmit={handleSubmit}>
                <h2>SignUp Form</h2>
            <div className='divs'>
                <div>
                <input className='input-2' placeholder='+088' disabled></input>
                </div>
                <div>
                <input className='inputnumber' value={phone} onChange={(e)=>setphone(e.target.value)} type="number" name='number' placeholder="xxxxxxxxxx"></input>
                </div>
              
            </div>
            <hr className='h'></hr>
            <br/>
                <input className='input2' value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name='email' placeholder="WRITE YOUR EMAIL ADDRESS"></input><hr></hr><br/>
                <button onClick={()=>navigate('/')} className='back'>Back</button>
                <button onClick={()=>navigate('/register2')} className='btn-img2'>Next Page<FaArrowRight className='fa'></FaArrowRight></button>
            </form>
            


        

        </div>
    </div>
    );
};




export default SecondPage;