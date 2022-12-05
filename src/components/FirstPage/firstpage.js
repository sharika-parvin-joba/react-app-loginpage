import React from 'react';
import '../FirstPage/firstpage.css'
// import SecondPage from './components/SecondPage/secondPage';
import { FaArrowRight } from "react-icons/fa";
import { useState } from 'react';
import {  useNavigate } from "react-router-dom";

const Firstpage = () => {
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstName,lastName);
    }
   const navigate = useNavigate();


    return (
        <div className='page1'>
            <div className='firstDiv'>
                <div className='logo'><img src='../Images/ultimate hrm logo.png' alt=''/></div>
                <div className='image'><img src='../Images/istockphoto.png' alt=''/></div>

            </div>
            <div className='secondDiv'>
                <form action='' method='post' onSubmit={handleSubmit} >
                    <h2>SignUp Form</h2>
                    <input className='input' value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" name='text' placeholder="WRITE YOUR FIRST NAME"></input><hr></hr><br/>
                    <input className='input' value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" name='text' placeholder="WRITE YOUR LAST NAME"></input><hr></hr><br/>
                   
                    <button type='submit' onClick={()=>navigate('register1')} className='btn-img'>Next Page<FaArrowRight className='fa'></FaArrowRight></button>
                </form>
                <div className='thirdDiv'>
                    <div><p>Already have an account?</p></div>
                    <div><button type='submit' onClick={()=>navigate('/login')} className='para'><u className='under'>Login Here</u></button></div>
                
               
                
            </div>


            

            </div>
        </div>
    );
};



export default Firstpage;