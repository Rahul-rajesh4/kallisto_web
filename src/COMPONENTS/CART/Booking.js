import React, { useEffect, useState } from 'react'
import Navbar from '../NAVEBAR/Navbar'
import Colordnav from '../NAVEBAR/Colordnav'
import Footer from '../FOOTER/Footer'
import cardimg from '../PRODUCTS/img/p2.jpg'
import './Booking.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
export default function Booking() {

    const log_id = localStorage.getItem('log_id')
    const [state, setState] = useState()
    const [state2, setState2] = useState()
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/carditailsshow/${log_id}`).then((response) => {
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
    const remove = (name) => {
        axios.post(`http://127.0.0.1:8000/api/deleteFromcart/${log_id}`, { 'name': name }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    }

    const addToFav = (event, name) => {
        event.preventDefault()
        axios.post(`http://127.0.0.1:8000/api/addToFavarourites`, { 'name': name, 'log_id': log_id }).then((response) => {
            console.log(response.data.suceess);
            if (response.data.suceess == 'ssuccess')
                toast.success('added', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            else {
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

        }).catch((error) => {
            console.log(error);
        })
    }

    function showLoader() {
        document.getElementById('loader').style.display = 'block';
        document.getElementById('content').style.display = 'none';
    }

    // Function to hide the loader
    function hideLoader() {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }

    // Show loader before making the POST request
    function toastwork(){
        console.log('hai')
            toast.success('order placed', {
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

    const book = (e) => {
        e.preventDefault();
        e.stopPropagation()
       
        console.log(state);
        console.log(state2);

        for (let i in state2) {
            console.log(state2[i]);
            if (state2[i].size === null) {
                toast.warn('Select the size ', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                return;
            }
        }
        showLoader();
        axios.post(`http://127.0.0.1:8000/api/bookProduct/${log_id}`, { 'array': state, 'array2': state2 }).then((response) => {
            console.log(response);
            hideLoader();
            // alert('success')
            // toastwork()
          })
          .catch((error) => {
              console.log(error);
             hideLoader();
          });
   
    }


    let sum = 0;
    let pay = 0
    for (let i in state) {
        sum += parseInt(state[i].actualprice, 10);
        pay += parseInt(state[i].discountprice, 10);

    }
    console.log(sum);
    console.log(pay);
    return (
        <>
            <div id="loader" class="loader-wrapper">
                <div class="loader"></div>
            </div>
            <div id="content">
                <Colordnav />
                <div className='favnavspace'>
                    <Navbar />
                    <ToastContainer></ToastContainer>
                </div>
                <div>
                    <h2 className='favheddingggg'>Shopping bag</h2>
                </div>
                <div className='container product-card'>
                    <div className='row'>
                        {state?.map((value, key) => {
                            const offer = ((value.actualprice - value.discountprice) / value.actualprice) * 100;
                            console.log(offer, 'sklfkls'); // Optional: Displaying the offer in the console

                            return (
                                <div className="col-md-3" key={key}>
                                    <div className="dress-card">
                                        <div className="dress-card-head" onClick={() => viewproduct(value.id)}>
                                            <img className="dress-card-img-top" src={`/backend/${value.Imagesone}`} alt="" />
                                        </div>
                                        <div className="dress-card-body">
                                            <h4 className="dress-card-title">{value.name}</h4>
                                            <p className="dress-card-para">{value.description}</p>
                                            <p className="dress-card-para">
                                                <span className="dress-card-price">Rs.{value.discountprice} &ensp;</span>
                                                <span className="dress-card-crossed">Rs.{value.actualprice}</span>
                                                <span className="dress-card-off">&ensp;({offer}% OFF)</span><br></br>
                                                {state2?.map((item, key) => (
                                                    item.product_name === value.name ? (
                                                        <span className="dress-card-price" key={key}>
                                                            selected size: {item.size} &ensp;
                                                        </span>
                                                    ) : null
                                                ))}

                                            </p>
                                            <div className="row">
                                                <div className="col-md-6 card-button">
                                                    <button className="card-button-inner remove-button" onClick={() => { remove(value.name) }}>Remove</button>
                                                </div>
                                                <div className="col-md-6 card-button">
                                                    <button class="card-button-inner wish-button" onClick={(e) => { addToFav(e, value.name) }}>Favourites</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}



                    </div>

                </div>
                <div class='container'>
                    <h3 >Total amount : {sum}</h3>
                    <h3>Payable amount : {pay}</h3>
                </div>
                <div className='bookingbutton'>
                    <div className="book-button"><div className="book-button-inner buy-button" onClick={book}>book now</div></div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    )
}
