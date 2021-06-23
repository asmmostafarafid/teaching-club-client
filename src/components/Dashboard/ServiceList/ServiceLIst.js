import React from "react";

const ServiceLIst = ({ serviceInfo, handleDelete }) => {
  const { _id, name, price } = serviceInfo;
  return (
    <tr>
      {}
      <th scope="row">{name}</th>
      <td>{price} BDT</td>

      <td>
        <button
          onClick={() => {
            handleDelete(_id);
          }}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ServiceLIst;
