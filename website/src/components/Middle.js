import React from 'react'
export default function () {
  return (
      <div classNameName="conatiner-fluid px-0">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://source.unsplash.com/1600x500/?clothes,men" className="d-block w-100 " alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Click on Products </h5>
                  <p>To get 10% OFF now Buy Now.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src=" https://source.unsplash.com/1600x500/?clothes,men" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Pack of 6 </h5>
                  <p>At just 2999 </p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://source.unsplash.com/1600x500/?fashion,men" className="d-block w-100 " alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Winter Sweater </h5>
                  <p>Order Now to get Rs500 cashback coupons</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          
      </div>
  )
}


