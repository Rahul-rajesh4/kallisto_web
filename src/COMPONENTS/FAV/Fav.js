import React, { useEffect, useState } from 'react'
import './Fav.css'
import cardimg from '../PRODUCTS/img/p2.jpg'
import Colordnav from '../NAVEBAR/Colordnav'
import Navbar from '../NAVEBAR/Navbar'
import Footer from '../FOOTER/Footer'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
export default function Fav() {

    const log_id = localStorage.getItem('log_id')
    const [state, setState] = useState()
    const [state2, setState2] = useState()
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/favshow/${log_id}`).then((response) => {
            console.log(response.data);
            setState(response.data.product)
            setState2(response.data.data)
        }).catch((error) => {
            console.log(error);
        })
    }, [])
    const Navigate = useNavigate()
    const viewproduct = (productId) => {

        Navigate(`/viewproduct/${productId}`);
    }
    const remove = (event,name)=>{
        axios.post(`http://127.0.0.1:8000/api/faveRemove/${log_id}`,{'name':name}).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    }

    const [cartDetails,setCart] = useState()
    const addTobag = (e,name)=>{
        e.preventDefault()
        const role=localStorage.getItem('role')
        const log_id=localStorage.getItem('log_id')
        if (role) {
            // console.log(log_id);
            // console.log(product.name);
            // console.log(selectedSize);
           setCart({['log_id']:log_id,['product_name']:name})
            console.log(cartDetails,'cartdetails')
           
           
        }
        else{
            toast.warn('Please login', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
    }
    useEffect(()=>{
        axios.post('http://127.0.0.1:8000/api/getcartdetails',cartDetails).then((response)=>{
            console.log(response.data.data);
    
        }).catch((error)=>{
            console.log(error);
        })
    },[cartDetails])    

    return (
        <>
            <Colordnav />
            <div className='favnavspace'>
                <Navbar/>
            </div>
            <ToastContainer></ToastContainer>
            <div>
                <h2 className='favheddingggg'>Favourites</h2>
            </div>
            <div className='container product-card'>
                <div className='row'>

                {state?.map((value,key)=>{
                       const offer = ((value.actualprice - value.discountprice) / value.actualprice) * 100;
                       console.log(offer, 'sklfkls'); // Optional: Displaying the offer in the console
                    return( <div class="col-md-3" key={key}>
                    <div class="dress-card">
                        <div class="dress-card-head"  onClick={() => viewproduct(value.id)}>
                            <img class="dress-card-img-top" src={`/backend/${value.Imagesone}`} alt=""></img>
                        </div>
                        <div class="dress-card-body">
                            <h4 class="dress-card-title">{value.name}</h4>
                            <p class="dress-card-para">{value.description}</p>
                            <p class="dress-card-para"><span class="dress-card-price">Rs.{value.discountprice} &ensp;</span><span class="dress-card-crossed">Rs.{value.actualprice}</span><span class="dress-card-off">&ensp;({offer}% OFF)</span></p>
                            <div class="row">
                                <div class="col-md-6 card-button"><a href=""><div class="card-button-inner bag-button" onClick={(event)=>{addTobag(event,value.name)}}>Add to Bag</div></a></div>
                                <div class="col-md-6 card-button"><a href=""><div class="card-button-inner remove-button" onClick={(event)=>{remove(event,value.name)}}>Remove</div></a></div>
                            </div>
                        </div>
                    </div>
                    </div>
                    );
                   
                    })}
                  
                   

                </div>

            </div>
            <div>
                <Footer/>
            </div>
        </>
    )
}
