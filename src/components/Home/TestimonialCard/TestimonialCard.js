import React from "react";
import "./TestimonialCard.css";
const TestimonialCard = ({ info }) => {
  return (
    <div className="col-md-3">
      <div
        className="card row mx-auto my-2 border-primary mb-3"
        style={{ maxWidth: "18rem" }}
      >
        <div className="col-12 my-2 card-header">
          <div className="row top-card">
            <div className="col-5">
              <img
                style={{ width: "60px", borderRadius: "50%" }}
                src={info.img}
                alt=""
              />
            </div>
            <div className="col-7  text-primary">
              <p className="">{info.name}</p>
              <small>{info.designation}</small>
            </div>
          </div>
        </div>
        <div
          style={{ height: "200px", overflow: "auto" }}
          className="card-body text-center col-12"
        >
          <p className="card-text">{info.remark}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
