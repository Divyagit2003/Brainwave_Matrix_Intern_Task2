import axios from "axios";
import React, { useEffect, useState } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <h1 className="text-center my-4">Product Details</h1>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-4 mb-4 d-flex align-items-stretch">
              <div className="card p-3" style={{ backgroundColor: "white", width: "100%" }}>
                <div className="text-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="card-img-top"
                    style={{ height: "250px", width: "auto", objectFit: "contain" }}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text text-truncate" style={{ maxHeight: "60px", overflow: "hidden" }}>
                    {product.description}
                  </p>
                  <p className="card-text font-weight-bold">${product.price}</p>
                  <button className="btn btn-primary mt-auto">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
