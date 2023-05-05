import React from "react";

import "./home.css";

const Home = () => {
  return (
    <>
      <body className="home-body">
        <form>
          <div class="container">
            <h1> LogIn </h1>

            <div class="box1">
              <label>Username : </label>
              <input
                type="text"
                placeholder="Enter Username"
                name="username"
                id="username"
                required=""
              />
              <div>
                <div class="box2">
                  <label>Password : </label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    id="password"
                    required=""
                  />
                </div>
                <div>
                  <a href="profile">
                    <button type="button" class="submit">
                      <strong>Submit</strong>
                    </button>
                  </a>
                  <button type="button" class="cancelbtn">
                    <strong>Cancel</strong>{" "}
                  </button>
                </div>
                <div class="rem">
                  <input type="checkbox" checked="checked" /> Remember me
                  <div class="forgot">
                    <a href="#">Forgot password?</a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </body>
    </>
  );
};

export default Home;
