import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function UpdatePage() {
  const [updateData, setUpdateData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:8000/todo/")
      .then((response) => {
        const data = response.data;
        setUpdateData(data);
      })
      .catch((error) => {
        // console.error("error fetching data", error);
        alert("error fetching data");
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

  return (
    <>
      <div className="container mx-5 my-5">
        <h3 className="my-3" style={{ textAlign: "left" }}>
          To Do List:
        </h3>
        <div>
          <div className="row">
            {updateData.map((record) => (
              <div className="col-sm-4" key={record.id}>
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
                      className="btn btn-warning position-absolute bottom-0 end-0 m-2">
                      <Link
                        to={`/update/${record.id}`}
                        className="lin"
                        state={{
                          id: record.id,
                          title: record.title,
                          description: record.description,
                          completed: record.completed,
                          reminder: record.setReminder,
                          due: record.due,
                        }}>
                        Update
                      </Link>
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
