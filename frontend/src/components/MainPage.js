import React from "react";
import Button from "./Button";
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
            <Button to="/add" text="Add" />
            <Button to="/view" text="View" />
            <Button to="/delete" text="Delete" />
            <Button to="/update" text="Update" />
          </div>
        </div>
      </div>
    </>
  );
}
