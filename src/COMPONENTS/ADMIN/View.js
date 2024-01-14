import React from 'react'
import './Admin.css'
export default function View() {
    return (
        <>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active adminadditem" id="pills-company" role="tabpanel" aria-labelledby="pills-company-tab">
                    <div class="container-fluid">
                        <div className='view-Booking'>
                            <div class="card ">
                                <div class="card-body">
                                    <h5 class="card-title">Add items</h5>
                                    <form>

                                        <label class="name">Product Name</label>
                                        <input type="text" class="form-control" placeholder="Criminal First name" aria-label="First name" name='Firstname'></input>
                                        <br></br>
                                        <label class="name">size</label>
                                        <br></br>
                                        <label class="name">Small</label>
                                        <input type="number" class="form-control" placeholder="number" name='Small'></input>
                                        <br></br>
                                        <label class="name">medium</label>
                                        <input type="number" class="form-control" placeholder="number" name='medium'></input>
                                        <br></br>
                                        <label class="name">large</label>
                                        <input type="number" class="form-control" placeholder="number" name='large'></input>
                                        <br></br>
                                        <label class="name">xl</label>
                                        <input type="number" class="form-control" placeholder="number" name='xl'></input>
                                        <br></br>
                                        <label class="name">Category</label>
                                        <select class="form-select" aria-label="Default select example" name='Category'>
                                            <option selected>Open this select menu</option>
                                            <option>Trousers</option>
                                            <option>jeans</option>
                                            <option>shirt</option>
                                            <option>t-shirt</option>
                                            <option>Shorts</option>
                                            <option>innerware</option>
                                            <option>Shoes</option>
                                            <option>Accessories</option>
                                            <option>Jackets & Coats</option>
                                            <option>Hoodies & Sweatshirts</option>
                                            <option>Skirts</option>
                                            <option>Dresses</option>
                                            <option>tops</option>
                                        </select>
                                        <br></br>
                                        <label class="name">Type</label>
                                        <select class="form-select" aria-label="Default select example" name='Type'>
                                            <option selected>Open this select menu</option>
                                            <option>Men</option>
                                            <option>Women</option>
                                            <option>kids</option>
                                            <option>Home</option>
                                        </select>
                                        <br></br>
                                        <label class="name">Actual price</label>
                                        <input type="number" class="form-control" placeholder="price" name='Price'></input>
                                        <br></br>
                                        <label class="name">discount price</label>
                                        <input type="number" class="form-control" placeholder="price" name='Price2'></input>
                                        <br></br>
                                        <label class="name">Add Photo1</label>
                                        {/* <input type="file" class="form-control" placeholder="file" name='Imageone' onChange={(e)=>{console.log(e.target.files[0]);;setOutput({ ...output,'Images':e.target.files[0]})}}></input> */}
                                        <br></br>
                                        <label class="name">Add Photo2</label>
                                        {/* <input type="file" class="form-control" placeholder="file" name='Imagestwo' onChange={(e)=>{console.log(e.target.files[0]);;setOutput({ ...output,'Images':e.target.files[0]})}}></input> */}
                                        <br></br>
                                        <label class="name">Add Photo3</label>
                                        {/* <input type="file" class="form-control" placeholder="file" name='Imagesthree' onChange={(e)=>{console.log(e.target.files[0]);;setOutput({ ...output,'Images':e.target.files[0]})}}></input> */}
                                        <br></br>
                                        <label class="name">Add Photo4</label>
                                        {/* <input type="file" class="form-control" placeholder="file" name='Imagesfour' onChange={(e)=>{console.log(e.target.files[0]);;setOutput({ ...output,'Images':e.target.files[0]})}}></input> */}
                                        <br></br><br></br>
                                        <button type="button" class="btn btn-dark">ADD</button>
                                    </form>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div class="tab-pane fade" id="pills-product" role="tabpanel" aria-labelledby="pills-product-tab">
                    <div class="container-fluid">
                        <h2 class="mb-3 font-weight-bold">Message</h2>
                        <div className='Add-Event'>
                            {/* body */}

                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
