import React from 'react'
import './footer.css'
import { useNavigate } from 'react-router-dom';
export default function Footer() {

  const navigate = useNavigate()
    const passvalue = (name) => {
        console.log(name);
        navigate(`/men/${name}`)
    }



  return (

    <footer class="bg-light footer-bgg">
    <div class="container py-5">
      <div class="row py-4">
        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0"><img src="img/logo.png" alt="" width="180" class="mb-3"></img>
          <p class="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
          <ul class="list-inline mt-4">
            <li class="list-inline-item"><a href="#" target="_blank" title="twitter"><i class="fab fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="#" target="_blank" title="facebook"><i class="fab fa-facebook"></i></a></li>
            <li class="list-inline-item"><a href="#" target="_blank" title="instagram"><i class="fab fa-instagram"></i></a></li>
            <li class="list-inline-item"><a href="#" target="_blank" title="pinterest"><i class="fba fa-pinterest"></i></a></li>
            <li class="list-inline-item"><a href="#" target="_blank" title="vimeo"><i class="fab fa-vimeo"></i></a></li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 class="text-uppercase font-weight-bold mb-4">Shop</h6>
          <ul class="list-unstyled mb-0">
            <li class="mb-2"><a onClick={() => passvalue('men')} class="text-muted">For Men</a></li>
            <li class="mb-2"><a onClick={() => passvalue('women')} class="text-muted">For women</a></li>
            <li class="mb-2"><a onClick={() => passvalue('kids')} class="text-muted">For Kids</a></li>
            <li class="mb-2"><a onClick={() => passvalue('home')} class="text-muted">home</a></li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 class="text-uppercase font-weight-bold mb-4">Company</h6>
          <ul class="list-unstyled mb-0">
            <li class="mb-2"><a href="/login" class="text-muted">Login</a></li>
            <li class="mb-2"><a href="/register" class="text-muted">Register</a></li>
            <li class="mb-2"><a href="/Fav" class="text-muted">Favourites</a></li>
            <li class="mb-2"><a href="/Cart" class="text-muted">Shopping bag</a></li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6 mb-lg-0">
          <h6 class="text-uppercase font-weight-bold mb-4">Kallisto</h6>
          <p class="text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>
          <div class="p-1 rounded border">
          <ul class="list-unstyled mb-0">
            <li class="mb-2"><a href="#" class="text-muted">About</a></li>
            <li class="mb-2"><a href="#" class="text-muted">Our Blog</a></li>
            
          </ul>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Copyrights --> */}
    <div class="bg-light py-4">
      <div class="container text-center">
        <p class="text-muted mb-0 py-2">© 2023 Bootstrap All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}
