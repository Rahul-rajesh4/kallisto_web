import React from 'react'
import './Card.css'
export default function Card() {
  return (
    <>
    <div className='product-card'>
    <div class="col-md-3">
        <div class="dress-card">
          <div class="dress-card-head">
            <img class="dress-card-img-top" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7578935/2018/10/23/d7b740bc-e00e-4bec-97aa-65016f8ff2e71540289479612-Harpa-Women-Dresses-2331540289479465-1.jpg" alt=""></img>
          </div>
          <div class="dress-card-body">
            <h4 class="dress-card-title">Harpa</h4>
            <p class="dress-card-para">Womans printed clothing</p>
            <p class="dress-card-para"><span class="dress-card-price">Rs.839 &ensp;</span><span class="dress-card-crossed">Rs.2099</span><span class="dress-card-off">&ensp;(60% OFF)</span></p>
            <div class="row">
              <div class="col-md-6 card-button"><a href=""><div class="card-button-inner bag-button">Add to Bag</div></a></div>
              <div class="col-md-6 card-button"><a href=""><div class="card-button-inner wish-button">Favourites</div></a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
    </>
  )
}
