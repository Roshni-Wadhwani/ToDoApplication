import React from "react";
import { Link } from "react-router-dom";
import bgrndImg from "../img/background.jpeg";
export default function MainPage() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bgrndImg})`,
          backgroundRepeat: "repeat-y",
          backgroundSize: "cover",
          minHeight: "100vh",
        }}>
        <div className="container my-5">
          <h1
            className="my-5"
            style={{ textAlign: "center", color: "whitesmoke" }}>
            ToDo Application
          </h1>
          <div className="d-grid gap-3 col-3 row-2 mx-auto">
            <Link to="/add">
              <button type="button" className="w-100 btn-lg">
                Add
              </button>
            </Link>
            <Link to="/view">
              <button type="button" className="w-100 btn-lg">
                View
              </button>
            </Link>
            <Link to="/delete">
              <button type="button" className="w-100 btn-lg">
                Delete
              </button>
            </Link>
            <Link to="/update">
              <button type="button" className="w-100 btn-lg">
                Update
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
