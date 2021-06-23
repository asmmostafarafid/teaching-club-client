import React from "react";
import offerImg from "../../../images/featureService.jpg";
import "./Offer.css";
const Offer = () => {
  return (
    <section className="my-5 py-2 offer-area">
      <h1 className="text-center my-2">
        Unique <span className="text-info">Offer</span> <br /> for{" "}
        <span className="text-info">Admission</span>
        Test
      </h1>
      <div className="row my-4">
        <div className="col-md-6 col-sm-12">
          <div style={{ width: "90%" }} className="mx-auto">
            <img src={offerImg} className="img-fluid img-thumbnail" alt="" />
          </div>
        </div>
        <div className="col-md-6 col-sm-12 pt-5 mt-5">
          <div className="w-75 mx-auto">
            <h1 className="text-primary">University Admission Course</h1>
            <h2 className="text-success">Only 500 tk</h2>
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsum
              doloremque repellendus aliquam inventore ratione ducimus eius,
              iste et doloribus omnis quibusdam, officiis ab atque laborum
              reiciendis eos? Laboriosam, nemo?
            </p>
            <button className="btn btn-primary text-center my-2">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
