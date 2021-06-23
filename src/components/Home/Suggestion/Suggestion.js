import React from "react";
import "./Suggestion.css";

const Suggestion = () => {
  return (
    <section className="suggestion my-5 py-2">
      <h1 className="text-center my-1 pt-3">
        {" "}
        Let Us Know <br></br>
        <span className="text-info"> How We Can Improve</span>
      </h1>

      <form className="my-2 w-50 mx-auto ">
        <div class="mb-3">
          <input type="text" class="form-control" placeholder="Name: " />
        </div>
        <div class="mb-3">
          <input type="email" class="form-control" placeholder="Email: " />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Suggestion:
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button className="btn btn-success">Send</button>
      </form>
    </section>
  );
};

export default Suggestion;
