import React, { useEffect, useState } from 'react'
import imgcard from '../Home/imgvid/p1.jpg'
import Footer from '../FOOTER/Footer'
import Colordnav from '../NAVEBAR/Colordnav'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Viewproduct() {
    const log_id=localStorage.getItem('log_id')

    const [selectedSize, setSelectedSize] = useState(null);
    const [product,setproduct]=useState()
    const [prosize,setprosize]=useState()
    const [array,setArray]=useState(['S','M','L'])
    const navigate=useNavigate()

    const handleChange = (event,valuess) => {
        // console.log('hai');
        const selectedButton = event.target.closest('.size-button').querySelector('.selectt-button');
        const allButtons = document.querySelectorAll('.size-button .selectt-button');

        setSelectedSize(valuess?event.target.value:"");

        allButtons.forEach((button) => {
            button.classList.remove('hovered');
        });

        selectedButton.classList.add('hovered');
        // console.log(selectedButton,'selectbutton')
        // console.log('Selected Size:', selectedSize);
    };
    
    const [cartDetails,setCart] = useState()
   
    // useEffect(()=>{
    //     axios.post('http://127.0.0.1:8000/api/getcartdetails',cartDetails).then((response)=>{
    //         console.log(response.data.data);
    
    //     }).catch((error)=>{
    //         console.log(error);
    //     })
    // },[cartDetails])    


    const {productId}=useParams()
    // console.log(productId,'hhhhhhhhhhh');
    useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/api/getSingleproduct/${productId}`).then((res)=>{
        // console.log(res);
        setproduct(res.data.data)
        setprosize(res.data.data2)
    }).catch((error)=>{
        console.log(error);
    })
    },[])
    const addToFav = (e)=>{
        e.preventDefault()
        axios.post( 'http://127.0.0.1:8000/api/addToFavarourites',{'name':product.name,'log_id':log_id}).then((response)=>{
          console.log(response.data.suceess);
          
          if (response.data.suceess === 'success')
              { 

             toast.success('added', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });}
        
          else{
            toast.warn('already added', {
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
    
      }).catch((error)=>{
          console.log(error);
      })
    }
    let discountElement = null;
    if (product){
        // console.log(product.actualprice)
        // console.log(product.discountprice)   
        const offer = (product.actualprice - product.discountprice) / product.actualprice * 100
        discountElement = <span className="dress-card-off">&ensp;({offer}% OFF)</span>;
        // console.log(offer)
    }


    const addTobag = (e)=>{
        e.preventDefault()
        const role=localStorage.getItem('role')
        const log_id=localStorage.getItem('log_id')
        if (role) {
            // console.log(log_id);
            // console.log(product.name);
            // console.log(selectedSize);
           //  setCart({['log_id']:log_id,['product_name']:product.name,['selectedSize']:selectedSize})
           //  console.log(cartDetails,'cartdetails')
           
        axios.post('http://127.0.0.1:8000/api/getcartdetails',{'log_id':log_id,'product_name':product.name,'selectedSize':selectedSize}).then((response)=>{
            console.log(response.data.response);
            toast.warn(response.data.response, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
    
        }).catch((error)=>{
            console.log(error);
        })
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
    return (
        <>
         <ToastContainer />
            <Colordnav />
            <div className='productspaceeee'>
                <div className='container'>
                    <div className='contview'>
                        <div className='imgview'>
                            <img src={`/backend${product?.Imagesone}`} alt="Image 1" />
                            <img src={`/backend${product?.Imagestwo}`} alt="Image 1" />
                            <img src={`/backend${product?.Imagesthree}`} alt="Image 1" />
                            <img src={`/backend${product?.Imagesonefour}`} alt="Image 1" />
                        </div>
                        <div className='textcontentttt'>
                            <h1 className='heddingggg123'>{product?.name}</h1>
                            <p className="dress-card-para">{product?.description}</p>
                            <p className="dress-card-para">
                                <span className="dress-card-price">Rs.{product?.discountprice} &ensp;</span>
                                <span className="dress-card-crossed">{product?.actualprice}</span>
                                {discountElement}
                            </p>

                            <h5 className='sizehedding'>Size</h5>

                            <div className='row'>
                            {array.map((value,key)=>{
                                const ss=prosize?.filter((item)=>item.size==value)
                                // console.log(ss,'sjfsjfjs');
                                let valuess=ss&&ss[0]?.count>0
                                // console.log(valuess,'jdjjsj');
                                return(
                                    <div className={`col-md-2 size-button ${selectedSize === `${valuess?value:""}` ? 'selected' : ''}`}
                                  
                                 >
                                    <label>
                                        <input type="radio" onClick={(event)=>handleChange(event,valuess)} name="size" value={`${value}`} className="visually-hidden"
                                         
                                         />
                                        <div className="size-button-inner selectt-button"
                                         style={{backgroundColor:`${valuess?"":"#e4e4e4"}`,color:`${valuess?"":"#707070"}`}}>{value}</div>
                                    </label>
                                </div>
                                )
                            })}
                               
                           
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-6 card-button"><a href=""><div class="card-button-inner bag-button" onClick={addTobag}>Add to Bag</div></a></div>
                                <div class="col-md-6 card-button"><a href=""><div class="card-button-inner wish-button" onClick={addToFav}>Favourites</div></a></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div>
                <Footer />
            </div>
        </>
    )
}
