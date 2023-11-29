import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./FormModule.css"

function Form() {
  const [userData, setUserData] = useState({
    email: null,
    password: null,
  });

  useEffect(() => {
    console.log(userData);
  }, [userData]); // Executa o console.log sempre que userData é alterado

  function handleSubmit(e) {
    e.preventDefault();
    setUserData({
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          name="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          name="password"
          placeholder="Password"
        />
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-dark">
        Submit
      </button>
    </form>
  );
}

export default Form;

