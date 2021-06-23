import React from "react";
import "./HeroSection.css";
import teachingImg from "../../../images/teaching.jpg";

const HeroSection = () => {
  return (
    <section className="hero-area">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-6 col-sm-12">
          <div className="w-75 my-md-1 my-sm-2 mx-auto">
            <img src={teachingImg} className="img-fluid img-thumbnail" alt="" />
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="w-50 mx-auto">
            <h1 className="text-primary my-2 py-2">
              Looking For Private Tutor ???
            </h1>
            <h2 className="text-success">
              Tutoring Solution for Every Student
            </h2>
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsum
              doloremque repellendus aliquam inventore ratione ducimus eius,
              iste et doloribus omnis quibusdam, officiis ab atque laborum
              reiciendis eos? Laboriosam, nemo?
            </p>
            <button className="btn btn-primary text-center mb-5">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
