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
    <div className="container-fluid" >
    <div className="row flex-nowrap" >
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark div-sidebar" >
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">Menu</span>
                    <hr/>
                    
                </a>

                <hr/>
                <div className="dropdown pb-4">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="nina_feliz.png" alt="hugenerd" width="100" height="100" className="rounded-circle" />
                    </a>
                </div>
                <div>
                <h6>Welcome</h6>
                <p>{currentUser.email}</p>
                <button className='logout-button' onClick={handleLogout}>Log Out</button>
                </div>
                <hr/>

                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Item </span> 1</a>
                        <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li className="w-100">
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Child</span> 1 </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Child</span> 2 </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <hr />
            </div>
        </div>
        <div className="col py-3">
        <Container />
        </div>
    </div>
</div>
  )
}

export default Sidebar
