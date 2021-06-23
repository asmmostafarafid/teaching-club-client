import React, { useEffect, useState } from "react";
import ServiceLIst from "../ServiceList/ServiceLIst";

const ManageService = () => {
  const [serviceData, setServiceData] = useState([]);
  const [editPageRedirection, setEditPageRedirection] = useState(false);
  const handleDelete = (id) => {
    fetch(`https://stark-cliffs-84613.herokuapp.com/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert("Deleted Successfully");
          setEditPageRedirection(true);
        }
      });
  };
  useEffect(() => {
    fetch(`https://stark-cliffs-84613.herokuapp.com/getServices`)
      .then((res) => res.json())
      .then((result) => setServiceData(result));
  }, [editPageRedirection]);
  return (
    <div>
      <h3 className="text-center my-4">Manage Services</h3>

      <div className="details-information">
        {serviceData && (
          <table className="table w-75 mx-auto">
            <thead>
              <tr>
                <th scope="col">Service Name</th>
                <th scope="col">Price</th>
                <th scope="col">Button</th>
              </tr>
            </thead>
            <tbody>
              {serviceData &&
                serviceData.map((data) => (
                  <ServiceLIst
                    key={data._id}
                    serviceInfo={data}
                    handleDelete={handleDelete}
                  ></ServiceLIst>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ManageService;
