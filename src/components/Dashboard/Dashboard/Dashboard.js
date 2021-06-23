import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import NavigationBar from "../../Shared/Navigationbar/NavigationBar";
import "./Dashboard.css";

import OrderList from "../OrderList/OrderList";
import SideBar from "../SideBar/SideBar";
import Review from "../Review/Review";
import AddService from "../AddService/AddService";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageService from "../ManageService/ManageService";

const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [customerInfo, setCustomerInfo] = useState([]);
  const [order, setOrder] = useState(true);
  const [addService, setAddService] = useState(false);
  const [makeAdmin, setMakeAdmin] = useState(false);
  const [manageService, setManageService] = useState(false);

  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    fetch("https://stark-cliffs-84613.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, []);
  const [review, setReview] = useState(false);
  const handleReview = (answer) => {
    if (answer === true) {
      setReview(true);
      setOrder(false);
      setAddService(false);
      setMakeAdmin(false);
      setManageService(false);
    }
  };

  const handleOrderList = (answer) => {
    if (answer === true) {
      setReview(false);
      setOrder(true);
      setAddService(false);
      setMakeAdmin(false);
      setManageService(false);
    }
  };
  const handleAddService = (answer) => {
    if (answer === true) {
      setReview(false);
      setOrder(false);
      setAddService(true);
      setMakeAdmin(false);
      setManageService(false);
    }
  };
  const handleMakeAdmin = (answer) => {
    if (answer === true) {
      setReview(false);
      setOrder(false);
      setAddService(false);
      setMakeAdmin(true);
      setManageService(false);
    }
  };
  const handleManageServices = (answer) => {
    if (answer === true) {
      setReview(false);
      setOrder(false);
      setAddService(false);
      setMakeAdmin(false);
      setManageService(true);
    }
  };
  const [dataLoad, setDataLoad] = useState(false);
  useEffect(() => {
    fetch("https://stark-cliffs-84613.herokuapp.com/dashboard", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setCustomerInfo(data));
  }, [dataLoad]);

  const handleDataLoad = (response) => {
    setDataLoad(response);
  };
  return (
    <div style={{ maxWidth: "100%", width: "98%" }} className="dashboard">
      <NavigationBar></NavigationBar>
      <div className="row main-content">
        <SideBar
          handleAddService={handleAddService}
          handleMakeAdmin={handleMakeAdmin}
          handleManageServices={handleManageServices}
          handleReview={handleReview}
          handleOrderList={handleOrderList}
        ></SideBar>
        <div className="col-9">
          <div
            style={{ height: "600px", overflow: "auto" }}
            className="user-detail"
          >
            <div className="user-info">
              <h5 className="text-end mx-2 p-2">
                User Name: {loggedInUser.name}
              </h5>
            </div>

            <div className="details-information">
              {order && (
                <table style={{ width: "80%" }} className="table mx-auto">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Service</th>

                      <th scope="col">Status</th>
                      {isAdmin && <th scope="col"> Change Status</th>}
                    </tr>
                  </thead>
                  <tbody>
                    {customerInfo &&
                      customerInfo.map((data) => (
                        <OrderList
                          key={data._id}
                          customerInfo={data}
                          isAdmin={isAdmin}
                          handleDataLoad={handleDataLoad}
                        ></OrderList>
                      ))}
                  </tbody>
                </table>
              )}
              {review && <Review></Review>}
              {addService && <AddService></AddService>}
              {makeAdmin && <MakeAdmin></MakeAdmin>}
              {manageService && <ManageService></ManageService>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
