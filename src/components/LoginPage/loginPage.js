import React from 'react';
import './loginPage.css';
import { useNavigate } from 'react-router';

const LoginPage = () => {
    const navigate=useNavigate('');
    return (
        <div className='page1'>
            <div className='firstDiv'>
                <div className='logo'><img src='../Images/ultimate hrm logo.png' alt=''/></div>
                <div className='image'><img src='../Images/istockphoto.png' alt=''/></div>

            </div>
            <div className='LoginDiv'>
                <form action='' >
                    <h2>Log in Form</h2>
                    <input className='input-email' type="email" name='email' placeholder="WRITE YOUR EMAIL ADDRESS"></input><hr></hr><br/>
                    <input className='input-pass' type="password" name='password' placeholder="WRITE PASSWORD"></input><hr></hr>
                <input className='input-char' type="text" name='' placeholder="password must be 8 characters" disabled></input><br></br>
                   
                    <button onClick={()=>navigate('/register3')} className='btn-img-login'>Login</button>
                </form>
                <div className='thirdDiv'>
                    <div><p>Don't have an account?</p></div>
                    <div><button onClick={()=>navigate('/')} className='sign'><u className='un'>SignUp Here</u></button></div>
                
                {/* <Link to={'./login'}>Login Here</Link> */}
                
            </div>


            

            </div>
        </div>
    );
};

export default LoginPage;