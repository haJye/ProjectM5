import React from 'react'
import Products from './products/Products';

const Home = () => {
    return (
        <div className='hero'>
            <div className="card bg-dark text-white border-0">
                <img src="/assets/background.jpg" className="card-img" alt="Background Cover" height={'550px'} />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">Latest Products</h5>
                        <p className="card-text lead fs-2">
                            Check out all the trends 
                        </p>
                    </div>
                </div>
            </div>
            <Products />
        </div>
    )
}

export default Home;