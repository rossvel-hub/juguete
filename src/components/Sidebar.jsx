import React, {useState} from 'react'
import { useAuth } from '../context/AuthContext'
import Container from './Container';

const Sidebar = () => {
    const [error, setError] = useState('');
    const { logout, currentUser } = useAuth();
  
    const handleLogout = async () => {
      try {
        await logout();
      } catch (error) {
        setError('Server Error')
      }
    }

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-1 col-sm-1 col-md-3 col-xl-2 px-sm-2 px-0 bg-dark div-sidebar">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-2 pt-2 text-white min-vh-100">
            <div className='col-12'>
                <div className='d-flex justify-content-end'>
                <a href="/" className="fs-4 pt-3 text-white text-decoration-none d-inline d-md-none"><i className="bi bi-list"></i></a>
                <a href="/" className="fs-4 pt-3 text-white text-decoration-none d-none d-md-inline"><i className="bi bi-x-lg"></i></a> 

                    <div>
                    
                    </div>
                
                </div>
            
            </div>
            
            <hr />
            <div className="dropdown pb-4 d-none d-md-inline">
              <a
                href="#"
                className="d-flex align-items-center text-white text-decoration-none"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="nina_feliz.png"
                  alt="hugenerd"
                  width="100"
                  height="100"
                  className="rounded-circle"
                />
              </a>
            </div>
            <div className='d-none d-md-inline'>
              <p>{currentUser.email}</p>
            </div>
            <hr />

            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start text-white" id="menu">
              <li>
                <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle text-white">
                  <i className="fs-sm-2 fs-md-4 bi-house-fill"></i>
                  <span className="ms-1 d-none d-md-inline">Inicio</span> 
                </a>
                <ul
                  className="collapse show nav flex-column ms-1"
                  id="submenu1"
                  data-bs-parent="#menu"
                >
                  <li className="w-100">
                    <a href="#" className="nav-link px-0 text-white ">
                    <i className="fs-sm-2 fs-md-4 bi-people-fill"></i>
                      <span className="d-none d-sm-inline">Usuario</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0 text-white">
                    <i className="fs-sm-2 fs-md-4 bi-clipboard2-data-fill"></i>
                      <span className="d-none d-sm-inline">Productos</span> 
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <hr />
            <div>
              <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle text-white"  onClick={handleLogout}>
              <i className="fs-sm-2 fs-md-4 bi bi-box-arrow-left"></i>
                  <span className="ms-1 d-none d-md-inline">Cerrar sesion</span> 
                </a>
            </div>
          </div>
        </div>
        <div className="col py-3">
          <Container />
        </div>
      </div>
    </div>
  );
}

export default Sidebar
