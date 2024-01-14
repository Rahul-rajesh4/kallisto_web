import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Colordnav() {


  const Navigate = useNavigate()

  const role = localStorage.getItem('role')
  console.log(role);



  const gohome = ()=>{
    Navigate('/')
  }



  return (
    <>
      <nav className='navbar navbar-expand-lg  navbar-bg'>
        <div className="container-fluid">
          <label className="navbar-brand logo" onClick={gohome}>K</label>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {role == 'user' ? (
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/profile">
                    profile
                  </a>
                </li>
              ) : role === 'admin' ? (
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/admin">
                    admin
                  </a>
                </li>
              ) : (
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/login">
                    login
                  </a>
                </li>
              )
              }
              <li className="nav-item">
                <a className="nav-link" href="/Fav">
                  Favourites
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Cart">
                  Shopping bag
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
