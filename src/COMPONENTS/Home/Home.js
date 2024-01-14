import React from 'react'
import './home.css'
import videobg from '../Home/imgvid/peoples.mp4'
import Imgdiv from './Imgdiv'
import Navbar from '../NAVEBAR/Navbar'
import Nav from '../NAVEBAR/Nav'
import Footer from '../FOOTER/Footer'
import { useNavigate } from 'react-router-dom'
export default function Home() {


    const navigate = useNavigate()
    const passvalue = (name) => {
        // dispatch(filterrr(name))
        console.log(name);
        navigate(`/men/${name}`)
    }
    return (
        <>
            <div>
                <Nav />
            </div>
            <div className='homemain'>
                <video className='video' src={videobg} autoPlay loop muted />
                <div className='content'>
                    <label>Kallisto</label>
                </div>
            </div >
            <div className='navspace'>
                <Navbar />
            </div>
            <div className=''>
                <Imgdiv />
            </div>
            <div className='container men'>
                <div className='seemore'>
                    <h1 className='heddingmen'>Men collections</h1>
                    <button class="button" onClick={() => passvalue('men')}> Shop Now</button>
                </div>
            </div>
            <div className='container women'>
                <div className='seemore'>
                    <h1 className='heddingmen'>Women collections</h1>
                    <button class="button" onClick={() => passvalue('women')}> Shop Now</button>
                </div>
            </div><div className='container kids'>
                <div className='seemore'>
                    <h1 className='heddingmen'>Kids collections</h1>
                    <button class="button" onClick={() => passvalue('kids')}> Shop Now</button>
                </div>
            </div>
            <div className='container accessories'>
                <div className='seemore'>
                    <h1 className='heddingmen'>Home</h1>
                    <button class="button" onClick={() => passvalue('home')}> Shop Now</button>
                </div>
            </div>
            <Footer/>
        </>
    )
}
