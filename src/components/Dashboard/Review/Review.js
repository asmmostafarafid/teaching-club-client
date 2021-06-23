import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";

const Review = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    data.img = loggedInUser.imgUrl;

    fetch("https://stark-cliffs-84613.herokuapp.com/addReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        alert("info recorded");
        e.target.reset();
      });
  };
  return (
    <div className="w-75 mx-auto p-5">
      {/* img,name,designation,remark */}
      <h3 className="text-center">It is pleasure to have review from you</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Name :
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={loggedInUser.name}
            {...register("name")}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email :
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={loggedInUser.email}
            {...register("email")}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Designation :
          </label>
          <input
            type="text"
            className="form-control"
            name="designation"
            {...register("designation", { required: true })}
          />
          {errors.designation && <span>This field is required</span>}
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Remarks:
          </label>
          <textarea
            className="form-control"
            name="remark"
            rows="3"
            {...register("remark", { required: true })}
          ></textarea>
          {errors.remark && <span>This field is required</span>}
        </div>

        <input className="btn btn-success" type="submit" />
      </form>
    </div>
  );
};

export default Review;
