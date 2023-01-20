import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/muneca.png'
import googleIcon from '../assets/google.png'

const Login = () => {
    const { login, singinWithGoogle } = useAuth();
	const [error, setError] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleEmail = e => setEmail(e.target.value);
  const handlePassword = e => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      history.push('/');
    } catch (error) {
      setError('Wrong Credentials');
      setTimeout(() => setError(''), 1500);
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
    <div className="wrapper">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="text-center mt-4 name">
            JUGUETE
        </div>
        {error && <p className='error' >{ error }</p>}
        <form onSubmit={handleSubmit} class="p-3 mt-3">
            <div className="form-field d-flex align-items-center">
                <span className="far fa-user"></span>
                <input type="mail" name="Email" id="userName" placeholder="Username" onChange={handleEmail} required/>
            </div>
            <div className="form-field d-flex align-items-center">
                <span className="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password" onChange={handlePassword} required />
            </div>
            <button className="btn mt-3" style={{ backgroundColor: "#70CFFF" }}>Login</button>
        </form>

        <div className="text-center mt-4 name">
              <section className='social-media'>
                  <div>
                      <img src={googleIcon} alt=''/>
                      <a href='/#' onClick={handleSingInWithGoogle}>Continue with Google</a>
                  </div>
                  <br/>
                  <p className='register'>
                    No tienes cuenta?  <hr/>
                    <Link to='/signup'> Crear cuenta</Link>
                </p>
              </section>
        </div>
        
    </div>

  )
}

export default Login


