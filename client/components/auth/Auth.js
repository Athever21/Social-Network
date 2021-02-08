import React, { useState } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import "./Auth.scss";

import Login from "./Login";
import Register from "./Regtister";

export default () => {
  const [pathname, setPathname] = useState(window.location.pathname);
  const [error, setError] = useState("");

  return (
    <main className="auth-container">
      {console.log("but why?")}
      {error && <div className="error">{error}</div>}
      <div className="auth-content">
        <div className="container">
          <nav className="nav">
            <Link
              to="/auth/login"
              className={
                window.location.pathname === "/auth/login" ? "active" : ""
              }
            >
              Login
            </Link>
            <Link
              to="/auth/register"
              className={
                window.location.pathname === "/auth/register" ? "active" : ""
              }
            >
              Register
            </Link>
          </nav>
          <Switch>
            <Route
              path="/auth/login"
              render={() => (
                <Login setPathname={setPathname} setError={setError} />
              )}
            />
            <Route
              path="/auth/register"
              render={() => (
                <Register setPathname={setPathname} setError={setError} />
              )}
            />
          </Switch>
        </div>
        <Redirect from="/" to="/auth/login" />
      </div>
    </main>
  );
};
