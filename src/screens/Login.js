import { Button } from 'bootstrap/dist/js/bootstrap.bundle';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [credentials, setcredentials] = useState({ email: "", password: "" });
let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })

    })
    const json = await response.json()
    console.log(json);
    if (!json.success) {
      alert("Enter Valid Credentials");
    }
    if (json.success) {
      localStorage.setItem("userEmail",credentials.email);
      localStorage.setItem("authToken",json.authtoken);
      console.log(localStorage.getItem("authToken"))
      navigate("/");
    }
    

  }

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <div className="container mt-5 pt-5">
        <form onSubmit={handleSubmit}>

          <div className="mb-3 row col-12 col-sm-8 col-md-6 m-auto">
            <label htmlFor="exampleInputEmail1" className="form-label h1">Email address</label>
            <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3 row col-12 col-sm-8 col-md-6 m-auto">
            <label htmlFor="exampleInputPassword1" className="form-label h1">Password</label>
            <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1" />
          </div>
          <div className="d-grid">
          <button type="submit" className="btn btn-primary text-color-white bg-black btn-block text-center btn-outline-info ">Submit</button>
          <Link to="/creatuser" className='m-3 btn btn-danger btn-block text-center btn-outline-warning'> new user</Link>
          </div>
        </form>
      </div>

    </div>
  )
}
