import React from "react";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch(`https://stark-cliffs-84613.herokuapp.com/makeAdmin`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        alert("Admin Added");
      });
  };

  return (
    <div className="w-75 m-5 mx-auto p-5">
      <h2 className="text-center">Make Admin</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            name="email"
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}
        </div>

        <input className="btn btn-primary" type="submit" />
      </form>
    </div>
  );
};

export default MakeAdmin;
