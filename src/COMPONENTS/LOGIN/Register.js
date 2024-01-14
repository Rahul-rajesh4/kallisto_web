import React, { useState } from 'react'
import './login.css'
import loginbbg from './img/loginimg.jpg'
import Footer from '../FOOTER/Footer'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../REDUX/SLICE/eventslice'
export default function Register() {



  const Navigate = useNavigate()


  const {data} = useSelector((state)=>state.event)

  const dispatch = useDispatch()
  console.log(data);

  const [input, setInput] = useState({
    name : '',
    contact : '',
    address : '',
    email : '',
    password : ''
  })

  const inputChange = (datas) =>{
    const {name,value} = datas.target

    setInput({...input,[name]:value })

  }

  const reg = ()=>{
    dispatch(register(input))
    Navigate('/login')
  }

  const back = ()=>{
    Navigate('/login')
  }



  return (
    <>
    <div class="loginbg">
        <div class="bgimglogin" style={{ backgroundImage: `url(${loginbbg})` }}>
          <div className='darkcolor'>
            <div class="container mt-5">
              <div class="card logincard">
                <div class="card-body">
                  <h5 class="card-title login-title">SIGN UP</h5>
                  <h6 class="card-subtitle mb-2 text-muted"></h6>
                  <form class="login-space">
                    <div class="mb-3 ">
                      <label for="exampleInputEmail1" class="form-label text-dark">Full Name</label>
                      <input type="text" class="form-control regform" id="exampleInputPassword1" name='name' onChange={inputChange}></input>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label text-dark">Contact</label>
                      <input type="tel" class="form-control regform" id="exampleInputPassword1" name='contact' onChange={inputChange}></input>
                    </div>
                    <div class="mb-3 ">
                      <label for="exampleInputEmail1" class="form-label text-dark">Address</label>
                      <input type="address" class="form-control regform" id="exampleInputPassword1" name='address' onChange={inputChange}></input>
                    </div>
                    <div class="mb-3 ">
                      <label for="exampleInputEmail1" class="form-label text-dark">Email Address</label>
                      <input type="email" class="form-control regform" id="exampleInputPassword1" name='email' onChange={inputChange}></input>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label text-dark">Password</label>
                      <input type="password" class="form-control regform" id="exampleInputPassword1" name='password' onChange={inputChange}></input>
                    </div>
                    <br></br><br></br>
                    <button type="button" onClick={reg} class="btn btn-dark">Submit</button>
                    &nbsp;<button type='button' onClick={back} class="btn btn-dark">Back</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
