import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [imageURL, setIMageURL] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "fb04c5d6f34b7b61def054a26ecc87e3");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setIMageURL(response.data.data.display_url);
        console.log(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onSubmit = (data, e) => {
    data.img = imageURL;
    console.log("submitted", data);
    fetch("https://stark-cliffs-84613.herokuapp.com/addServices", {
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
    <div className="w-75 mx-auto m-5 p-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Name :
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            {...register("name", { required: true })}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Price :
          </label>
          <input
            type="number"
            className="form-control"
            name="price"
            {...register("price", { required: true })}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Image :
          </label>
          <input
            type="file"
            className="form-control"
            name="details"
            onChange={handleImageUpload}
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Course Details:
          </label>
          <textarea
            className="form-control"
            name="details"
            rows="3"
            {...register("details", { required: true })}
          ></textarea>
          {errors.remark && <span>This field is required</span>}
        </div>

        <input className="btn btn-success" type="submit" />
      </form>
    </div>
  );
};

export default AddService;
