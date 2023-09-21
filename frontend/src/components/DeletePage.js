import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function DeletePage() {
  const [deleteData, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:8000/todo/")
      .then((response) => {
        const data = response.data;
        setData(data);
      })
      .catch((error) => {
        alert.error("error fetching data", error);
      });
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US");
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleClick = (id) => {
    axios
      .delete(`http://localhost:8000/todo/${id}/`)
      .then((response) => {
        alert("deleted successfully");
        fetchData();
      })
      .catch((error) => {
        alert("error deleting item", error);
      });
  };

  return (
    <>
      <div className="container mx-5 my-5">
        <h3 className="my-3" style={{ textAlign: "left" }}>
          To Do List:
        </h3>
        <div>
          <div className="row">
            {deleteData.map((record) => (
              <div className="col-sm-4 col-md-4 col-lg-4" key={record.id}>
                <div className="card h-100">
                  <div className="card-body position-relative">
                    <h5 className="card-title" style={{ display: "inline" }}>
                      {record.title}
                    </h5>
                    {record.completed ? (
                      <span className="badge bg-success mx-2"> completed</span>
                    ) : (
                      <span className="badge bg-warning mx-2">
                        Not completed
                      </span>
                    )}
                    <p className="card-text">{record.description}</p>
                    <br />
                    {record.setReminder ? (
                      <>
                        <div>
                          <strong>Reminder set</strong>
                        </div>
                        <div>
                          <div>Date: {formatDate(record.due)}</div>
                          <div>Time: {formatTime(record.due)}</div>
                        </div>
                      </>
                    ) : null}
                    <button
                      type="button"
                      className="btn btn-danger position-absolute bottom-0 end-0 m-2"
                      onClick={() => handleClick(record.id)}>
                      {/* <span>Delete</span> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash mx-2"
                        viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6a.5.5 0 0 0 .5-.5Z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Link to="/" className="lin">
          <button type="button" id="backBtn" className="w-20 mx-3 my-3">
            Back
          </button>
        </Link>
      </div>
    </>
  );
}
