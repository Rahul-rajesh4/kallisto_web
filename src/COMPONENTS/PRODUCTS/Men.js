import React, { useEffect, useState } from 'react'
import './product.css'
import cardimg from './img/p2.jpg'
import Navbar from '../NAVEBAR/Navbar'
// import Nav from '../NAVEBAR/Nav'
import Footer from '../FOOTER/Footer'
import { useNavigate, useParams } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { filterrr } from '../REDUX/SLICE/eventslice'
import axios from 'axios'
// import { event } from 'jquery'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Colordnav from '../NAVEBAR/Colordnav'
export default function Men() {


  const log_id=localStorage.getItem('log_id')

  const [state, setState] = useState()

  const [category,setCategory] = useState()

  const Navigate = useNavigate()
  const { filter } = useParams()
  console.log(filter, 'kjjj');


  useEffect(() => {
    axios.post('http://127.0.0.1:8000/api/filtermethod', { "gender": filter,"category":category }).then((res) => {
      setState(res.data.data)
      console.log(res, 'dsjsjk');
    }).catch((error) => {
      console.log(error);
    })
  }, [filter,category])


  const Catogoryyy = (event)=>{
    const {name,value}=event.target
    // console.log(name,value);
    setCategory(value)
  }
  console.log(category,'dksfks');


  // const { data } = useSelector((state) => state.event)
  // console.log(data,'hhhh');

  // const [input, setInput] = useState()


  // useEffect(() => {
  //   dispatch(filterrr(filter))
  // },[])



  console.log(state, 'sdklfj');

  const viewproduct = (productId) => {

    Navigate(`/viewproduct/${productId}`);
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
  
  
  const addToFav = (event,name)=>{
    event.preventDefault()
    axios.post( `http://127.0.0.1:8000/api/addToFavarourites`,{'name':name,'log_id':log_id}).then((response)=>{
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
  return (
    <>
      <Colordnav/>
      <div className={`container ${filter == "men" ? 'menbgimg' : filter == "women" ? 'womenbgimg' : filter == "kids" ? "kidsbgimg" : filter == "home" ? "Accessoriesbgimg" : null}`}>
        <h1 className='heddinggg'>{filter} Collections</h1>
      </div>
      <div className='productnavspace'>
        <Navbar />
      </div>
      <ToastContainer></ToastContainer>

      <div className='container product-card'>
        <div className='products-category-right' style={{ textAlign: 'right' }}>
          <label class="name" style={{ display: 'inline-block', marginRight: '10px' }}>Category</label>
          <select class="form-select" aria-label="Default select example" onChange={Catogoryyy} name='category' style={{ width: '250px', display: 'inline-block' }}>
            <option name="category" value="" selected>All</option>
            <option name="category" value="Trousers">Trousers</option>
            <option name="category" value="jeans">jeans</option>
            <option name="category" value="shirt">shirt</option>
            <option name="category" value="t-shirt">t-shirt</option>
            <option name="category" value="Shorts">Shorts</option>
            <option name="category" value="innerware">innerware</option>
            <option name="category" value="Shoes">Shoes</option>
            <option name="category" value="Accessories">Accessories</option>
            <option name="category" value="Jackets & Coats">Jackets & Coats</option>
            <option name="category" value="Hoodies & Sweatshirts">Hoodies & Sweatshirts</option>
            <option name="category" value="Skirts">Skirts</option>
            <option name="category" value="Dresses">Dresses</option>
            <option name="category" value="tops">tops</option>
          </select>
        </div>
        <div className='row'>
          {state?.map((value, key) => {
            const offer = (value.actualprice - value.discountprice) / value.actualprice * 100
            console.log(offer, 'sklfkls');


            return (
              <div class="col-md-6 col-lg-3" key={key}>
                <div class="dress-card">
                  <div class="dress-card-head" onClick={() => viewproduct(value.id)}>
                    <img class="dress-card-img-top" src={`/backend/${value.Imagesone}`} alt=""></img>
                  </div>
                  <div class="dress-card-body">
                    <h4 class="dress-card-title">{value.name}</h4>
                    <p class="dress-card-para">{value.description}</p>
                    <p class="dress-card-para">
                      <span class="dress-card-price">Rs.{value.discountprice} &ensp;</span>
                      <span class="dress-card-crossed">Rs.{value.actualprice}</span>
                      <span class="dress-card-off">&ensp;({offer}% OFF)</span>
                    </p>
                    <div class="row">
                      <div class="col-md-6 card-button"><a href="" onClick={(event)=>{addTobag(event,value.name)}}><div class="card-button-inner bag-button" >Add to Bag</div></a></div>
                      <div class="col-md-6 card-button"><a href=""onClick={(event)=>{addToFav(event,value.name)}}><div class="card-button-inner wish-button">Favourites</div></a></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}


        </div>

      </div>

      <Footer />
    </>
  )
}
