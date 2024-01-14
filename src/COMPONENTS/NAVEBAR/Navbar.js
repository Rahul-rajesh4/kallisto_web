import React from 'react'
import './Nav.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { filterrr } from '../REDUX/SLICE/eventslice';
export default function Navbar() {

    // const { data } = useSelector((state) => state.event)

    const dispatch = useDispatch()
    // console.log(data);




    const navigate = useNavigate()
    const passvalue = (name) => {
        // dispatch(filterrr(name))
        console.log(name);
        navigate(`/men/${name}`)
        
    }
    return (
        <>
            <div className='navbarr'>
                <ul class="navbar-nav mx-auto flex-row justify-content-center">
                    <li class="nav-item me-3">
                        <a onClick={() => passvalue('men')} class="nav-link active" aria-current="page" >Men</a>
                    </li>
                    <li class="nav-item me-3">
                        <a onClick={() => passvalue('women')} class="nav-link " >Women</a>
                    </li>
                    <li onClick={() => passvalue('kids')} class="nav-item me-3">
                        <a class="nav-link " >Kids</a>
                    </li>
                    <li class="nav-item me-3">
                        <a onClick={() => passvalue('home')} class="nav-link " >Home</a>
                    </li>
                </ul>
            </div>

        </>
    )
}
