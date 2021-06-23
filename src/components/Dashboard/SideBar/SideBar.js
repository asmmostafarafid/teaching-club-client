import React, { useContext, useEffect, useState } from "react";
import { BsListCheck, BsCommand } from "react-icons/bs";
import { FaCommentAlt, FaPlusCircle } from "react-icons/fa";
import { UserContext } from "../../../App";
import "./SideBar.css";
const SideBar = ({
  handleAddService,
  handleMakeAdmin,
  handleManageServices,
  handleReview,
  handleOrderList,
}) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
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
  const handleLogOut = () => {
    sessionStorage.clear();
    setLoggedInUser("");
  };
  return (
    <div className="col-2 ">
      <div style={{ height: "600px" }} className="bg-primary user-access">
        <h3 className="p-2 text-center mt-3">Dashboard</h3>
        <div className="access-list">
          <p onClick={() => handleOrderList(true)} className="my-2 access-item">
            {" "}
            <BsListCheck className="icon" /> Order List
          </p>
          <p onClick={() => handleReview(true)} className="my-2 access-item">
            {" "}
            <FaCommentAlt className="icon"></FaCommentAlt>Review
          </p>
          {isAdmin && (
            <div>
              <p
                onClick={() => handleAddService(true)}
                className="my-2 access-item"
              >
                <FaPlusCircle className="icon" />
                Add service
              </p>
              <p
                onClick={() => handleMakeAdmin(true)}
                className="my-2 access-item"
              >
                {" "}
                <FaPlusCircle className="icon" />
                Make Admin{" "}
              </p>
              <p
                onClick={() => handleManageServices(true)}
                className="my-2 access-item"
              >
                {" "}
                <BsCommand className="icon" />
                Manage Services
              </p>
            </div>
          )}
          <br />
          <h5
            onClick={handleLogOut}
            style={{ cursor: "pointer" }}
            className="text-warning text-center log-out"
          >
            Log Out
          </h5>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
