import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import { useForm } from "react-hook-form";

const OrderList = (props) => {
  const handleDataLoad = props.handleDataLoad;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [userId, setUserId] = useState("");
  const handleStatusChange = (id) => {
    setUserId(id);
  };

  const onSubmit = (data, e) => {
    data.userId = userId;
    console.log(data);
    handleDataLoad(false);
    fetch(`https://stark-cliffs-84613.herokuapp.com/update`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          e.target.reset();
          alert("updated");
          handleDataLoad(true);
        }
      });
  };

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { name, email, service, status, _id } = props.customerInfo;
  const isAdmin = props.isAdmin;

  return (
    <tr>
      {}
      <th scope="row">{name}</th>
      <td>{email}</td>
      <td>{service}</td>
      <td>{status}</td>
      {isAdmin && (
        <td>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <input
                type="text"
                name="status"
                className="col-8"
                {...register("status", { required: true })}
              />
              {errors.status && <span>This field is required</span>}
              <div className="col-4">
                <input
                  onClick={() => {
                    handleStatusChange(_id);
                  }}
                  className=" btn btn-primary me-1"
                  type="submit"
                />
              </div>
            </div>
          </form>
        </td>
      )}
    </tr>
  );
};

export default OrderList;
