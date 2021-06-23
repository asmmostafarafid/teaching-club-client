import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../../App";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
const Login = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user);
        // ...
        const newUser = {
          name: user.displayName,
          email: user.email,
          imgUrl: user.photoURL,
        };
        // console.log(newUser);
        setLoggedInUser(newUser);
        storeAuthToken();
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("Error Message", errorMessage);
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };
  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem("token", idToken);
        history.replace(from);
      })
      .catch(function (error) {
        console.log("Token Error", error);
      });
  };
  return (
    <div className="container">
      <div
        className="d-flex justify-content-center align-items-center "
        style={{ height: "100vh" }}
      >
        <div className="shadow p-5 w-50 bg-warning">
          <h1>Login</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="">User Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="">Password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="text-danger">
                Forgot your password?
              </label>
            </div>
            <button className="btn btn-primary">Sign In</button>
          </form>
          <h1>Or</h1>
          <button onClick={handleGoogleSignIn} className="btn btn-info">
            Google Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
