import React from "react";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <div
        className="text-center"
        style={{ backgroundColor: "#f8f9fa", padding: "50px" }}
      >
        <h1>This is about</h1>
        <p className="lead">
          We are passinate about providing high-quality product and service to
          our customers.
        </p>
      </div>
      <div className="container text-center py-4">
        <h2>Our Mission</h2>
        <p className="lead">
          Our Mission is to create product that improve the lives of our
          customer.
        </p>
      </div>

      <div
        className="container text-center py-4"
        style={{ backgroundColor: "#e9ecf" }}
      >
        <h2>Our Story</h2>
        <p className="lead">
          Founded in 2020, BrandName started as a small startup with a big
          vision. Over the years, we have grown into a recognized name in the
          undustry , delivering products that stand out for their quality and
          reliability
        </p>
      </div>

      <div className="container text-center py-4">
        <h2>Meet the Teams</h2>
        <div className="row">
          <div className="col-md-4">
            <div class="card">
              <img src="./assests/person1.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Christina</h5>
                <p class="card-text"> CEO</p>
                
              </div>
            </div>
          </div>
          <div className="col-md-4">
          <div class="card img-fluid">
              <img src="./assests/person2.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Munna</h5>
                <p class="card-text"> CEO</p>
                
              </div>
            </div>
          </div>
          <div className="col-md-4">
          <div class="card">
              <img src="./assests/person3.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Iwaria</h5>
                <p class="card-text"> CEO</p>
                
              </div>
            </div>
          </div>


        </div>
        <br />
        <br />
        <Footer/>
      </div>
    </>
  );
};

export default About;
