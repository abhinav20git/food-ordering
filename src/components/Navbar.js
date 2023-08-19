import React from 'react'

import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo2.png';
import Badge from 'react-bootstrap/Badge';

export default function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("authToken");
    navigate("/login");

  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-grey">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img src={Logo} alt="logo" style={{ width: "15rem" }} /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link className="nav-link active fs-5  " aria-current="page" to="/">Home</Link>
              </li>
              {(localStorage.getItem("authToken")) ?
                <li className="nav-item">
                  <Link className="nav-link active fs-5 " aria-current="page" to="/">My Orders</Link>
                </li>
                : ""}

            </ul>
            {(!localStorage.getItem("authToken")) ?
              <div className='d-flex'>
                <Link className="btn bg-white text-black mx-1 " to="/login">Login</Link>
                <Link className="btn bg-white text-black mx-1" to="/creatuser">SignUp</Link>
              </div>
              :
              <div>
                <div className='btn bg-white text-black mx-2'>
                  My Cart {" "}
                  <Badge pill bg="danger">2</Badge>
                </div>

                <div className='btn bg-black text-white mx-2' onClick={handleLogout}>
                  Logout
                </div>
              </div>
            }
          </div>
        </div>
      </nav>
    </div>
  )
}
