import React from 'react';

const Contact = () => {
  return (
    <div>
      <div className="container my-4">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Tell us about yourself</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea2">Elaborate Your Concern</label>
            <textarea className="form-control" id="exampleFormControlTextarea2" rows="3"></textarea>
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>

      <footer className="container">
        <p>© 2025-2026 iCoder, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
      </footer>
    </div>
  );
}

export default Contact;
