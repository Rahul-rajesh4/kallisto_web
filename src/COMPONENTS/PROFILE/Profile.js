import React, { useEffect, useState } from 'react'
import Footer from '../FOOTER/Footer'
import Colordnav from '../NAVEBAR/Colordnav'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nodeName } from 'jquery';
export default function Profile() {

    const log_id=localStorage.getItem('log_id')
    const [product,setproduct]=useState()

    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/getorder/${log_id}`).then((res)=>{
            console.log(res);
            setproduct(res.data.data)
        }).catch((error)=>{
            console.log(error);
        })
    },[])

    const cancelorder = (event,id)=>{
        event.preventDefault()
        console.log(id);
        axios.get(`http://127.0.0.1:8000/api/cancelorder/${id}`).then((res)=>{
            console.log(res);
        }).catch((error)=>{
            console.log(error);
    })
    }
    
    return (
        <>
         <ToastContainer />
            <Colordnav />
            <div className='productspaceeee'>
                <div className='container'>
                    <h2>My orders</h2>
                    {product?.map((value,key)=>(
                        <div class="card mb-3 mt-5" style={{maxWidth: 1080+'px'}}>
                        <div class="row no-gutters">
                            <div class="col-md-4">
                            <img class='img-fluid' src={`/backend/${value.image}`} alt="..."></img>
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title mt-3">ORDER ID : {value.order_id}</h5>
                                <p class="card-text">ordered on {value.date}</p>
                                <h5 class="card-title">{value.product_name}</h5>
                                <p class="card-text">Address :{value.address}</p>
                                <h5 class="card-title">Pay Amount : {value.price}</h5>
                                <p className="card-text" style={value.Status === 'delivered' ? {color: 'green'} : (value.Status === 'canceled' ? {color: 'red'} : {})}>
                                {value.Status}</p>
                                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                {value.Status === 'canceled'  ?
                                null
                                :
                                value.Status === 'delivered' ? 
                                null
                                :
                               <div style={{paddingTop:130+'px'}} class="col-md-6 card-button "><a href="" onClick={(event)=>{cancelorder(event,value.order_id)}} ><div class="card-button-inner bag-button " >CANCEL</div></a></div>
                                }
                            </div>
                            </div>
                        </div>
                        </div>
                    ))}

                    
                    </div>

                <Footer />
            </div>
        </>
    )
}
