import React, { useEffect, useState } from 'react'
import './Nav.css'
import { useNavigate } from 'react-router-dom';
export default function Nav() {


  const Navigate = useNavigate()




  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);



  const role = localStorage.getItem('role')
  console.log(role);


  const gohome = ()=>{
    Navigate('/')
  }

  return (
    <>
      <nav className={`navbar navbar-expand-lg fixed-top ${color ? 'navbar-bg' : 'nav-transparent'}`}>
        <div className="container-fluid">
          <div onClick={gohome}>
          <label className="navbar-brand logo" >K</label>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${color ? 'text-center' : 'text-center'}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {role == 'user' ? (
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/Profile">
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
                <a className="nav-link" href="/cart">
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
