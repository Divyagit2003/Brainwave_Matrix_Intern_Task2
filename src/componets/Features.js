import React from "react";

const Features = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center">Why Choose Us?</h1>

        <div className="row ">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body bg-info">
                <h5 className="card-title">Fast Delivery</h5>
                <p className="card-text"> We offer fast and reliable delivery on all our products.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body bg-success">
                <h5 className="card-title">High Quality</h5>

                <p className="card-text"> Our product meet the highest standards, ensuring customer satisfaction.</p>
              </div>
            </div>
          </div>

          <div className="col md-4">
            <div className="card">
              <div className="card-body bg-danger">
                <h5 className="card-title">Customer Support</h5>
                <p className="card-text">We provide 27/7 customer support to assist you anytime, anywhere.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
