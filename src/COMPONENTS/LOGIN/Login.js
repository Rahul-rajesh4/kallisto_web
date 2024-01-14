import React, { useState } from 'react'
import './login.css'
import axios from 'axios'
import loginbbg from './img/loginimg.jpg'
import Footer from '../FOOTER/Footer'
// import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import { loginapi } from '../REDUX/SLICE/eventslice'
export default function Login() {

  const Navigate = useNavigate()


  // const {data} = useSelector((state)=>state.event)

  // const dispatch = useDispatch()
  // console.log(data);


  const [state,setState] = useState({})

  const inputChange = (datas) =>{
    const {name, value } = datas.target
    setState({...state,[name]: value })
  }

  const login = ()=>{
    console.log(state);
    axios.post('http://127.0.0.1:8000/api/loginAPI', state).then((response) => {
      console.log(response.data.message);
      // console.log(response.data.data.log_id);
      localStorage.setItem('log_id', response.data.data.log_id)
      localStorage.setItem('role', response.data.data.role)
      // window.location.reload()
      Navigate('/')

    }).catch((error) => {
      console.log(error.response.data);
    })
    

  }

  const back =()=>{
    Navigate('/')
  }


  return (
    <>
    <div class="loginbg">
        <div class="bgimglogin" style={{ backgroundImage: `url(${loginbbg})` }}>
          <div className='darkcolor'>
            <div class="container mt-5">
              <div class="card logincard">
                <div class="card-body">
                  <h5 class="card-title login-title">Login</h5>
                  <h6 class="card-subtitle mb-2 text-muted"></h6>
                  <form class="login-space">
                    <div class="mb-3 ">
                      <label for="exampleInputEmail1" class="form-label text-dark">Email Address</label>
                      <input type="email" class="form-control" id="exampleInputEmail1" name='email'  aria-describedby="emailHelp" onChange={inputChange}></input>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label text-dark">Password</label>
                      <input type="password" class="form-control" id="exampleInputPassword1" name='password' onChange={inputChange}></input>
                    </div>
                    <br></br>
                    <div>
                      <a href='/register' className='text-dark'>Sign Up</a>
                    </div>
                    <br></br><br></br>
                    <button type="button" onClick={login} class="btn btn-dark">Submit</button>
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
