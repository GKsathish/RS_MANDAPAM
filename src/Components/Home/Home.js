import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
        <div className="container-fluid">
          <div className="row my-2">
            <div className="col-lg col-sm m-2">
              <div class="card text-center">
                <div class="card-header">XXX HALL</div>
                <div class="card-body">
              
                  <p class="card-text">XXX PRICE</p>
            
                  <div
                    id="carouselExampleSlidesOnly"
                    class="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img
                          src="/images/func1.jpeg"
                          class="d-block w-100 h-50 "
                          alt="..."
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="/images/func2.jpeg"
                          class="d-block w-100 h-50"
                          alt="..."
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="/images/func3.jpeg"
                          class="d-block w-100 h-50"
                          alt="..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <div className="col-lg col-sm m-2">
            <div class="card text-center">
              <div class="card-header">XXX HALL</div>
              <div class="card-body">
              
                <p class="card-text">XXX PRICE</p>
                <Link to="About" class="btn btn-primary"></Link>
                <div
                  id="carouselExampleSlidesOnly"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="/images/func5.jpeg"
                        class="d-block w-100 h-50"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="/images/func5.jpeg"
                        class="d-block w-100 h-50"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="/images/func6.jpeg"
                        class="d-block w-100 h-50"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg col-sm m-2">
            <div class="card text-center">
              <div class="card-header">XXX HALL</div>
              <div class="card-body">
               
                <p class="card-text">XXX PRICE</p>

                <div
                  id="carouselExampleSlidesOnly"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="/images/func7.jpeg"
                        class="d-block w-100 h-50 "
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="/images/func8.jpeg"
                        class="d-block w-100 h-50"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="/images/func9.jpeg"
                        class="d-block w-100 h-50"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        <div className="row my-2">
             
        </div>
      </div>
    </>
  );
};

export default Home;
