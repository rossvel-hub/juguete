import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../assets/muneca.png'
import googleIcon from '../assets/google.png'

import { useAuth } from '../context/AuthContext'

const SignUp = () => {
    const { signup, singinWithGoogle } = useAuth();
    const [error, setError] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const history = useHistory();
  
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleConfirmPassword = (e) => setConfirmPassword(e.target.value);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
        setError('Contraseñas no coinciden');
        setTimeout(() => setError(''), 1500);
      } else {
        try {
          await signup(email, password);
          history.push('/');
        } catch (error) {
          setError('Error de servidor');
          setTimeout(() => setError(''), 1500);
        }
      }
    }
  
    const handleSingInWithGoogle = async (e) => {
      e.preventDefault();
      try {
        await singinWithGoogle();
        history.push('/');
      } catch (error) {
        setError('Something happens');
        setTimeout(() => setError(''), 1500);
      }
    }
  
    return (
    <div class="wrapper">
        <div class="logo">
            <img src={logo} alt="" />
        </div>
        <div class="text-center mt-4 name">
            JUGUETE
        </div>
        <form onSubmit={handleSubmit} class="p-3 mt-3">
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="mail" name="Email" id="userName" placeholder="Username" onChange={handleEmail} required/>
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password" onChange={handlePassword} required />
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password Confirm" onChange={handleConfirmPassword} required />
            </div>
            <button class="btn mt-3" style={{ backgroundColor: "#70CFFF" }}>SignUp</button>
        </form>
        <div class="text-center mt-4 name">
              <section className='social-media'>
                  <div>
                      <img src={googleIcon} alt=''/>
                      <a href='/#' onClick={handleSingInWithGoogle}>Continue with Google</a>
                  </div>
                  <br/>
                  <p className='register'>
                      Ya tienes cuenta? <hr/>
                      <Link to='/login'> Inicia sesion</Link>
                  </p>
              </section>
        </div>
       
    </div>


    )
}

export default SignUp


