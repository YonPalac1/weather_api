import React from "react";
import "./form.style.css";

const Form = props => {
  return (
    <div className="container h-100">
      <h1 className="text-white">Weather Api</h1>
      <hr/>
      <form onSubmit={props.loadweather}>
        <div>{props.error ? error() : ""}</div>
        <div className="row">
            <input
              type="text"
              className="form-control text-white"
              placeholder="City"
              name="city"
              autoComplete="off"
            />
            <input
              type="text"
              className="form-control text-white"
              placeholder="Country"
              name="country"
              autoComplete="off"
            />
            <button className="btn btn-warning">Watch Weather</button>
        </div>
      </form>
    </div>
  );
};

const error = props => {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please Enter City and Country...!
    </div>
  );
};

export default Form;