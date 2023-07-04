import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export default function UpdateForm(props) {
  const location = useLocation();
  const { id } = location.state;
  const { title } = location.state;
  const { description } = location.state;
  const { completed } = location.state;
  const { reminder } = location.state;
  const { due } = location.state;
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedDescription, setUpdatedDescription] = useState(description);
  const [updatedCompleted, setUpdatedCompleted] = useState(completed);
  const [updatedReminder, setUpdatedReminder] = useState(reminder);
  const [updatedDue, setUpdatedDue] = useState(dayjs(due));

  useEffect(() => {
    setUpdatedReminder(reminder);
    setUpdatedDue(due);
  }, [reminder, due]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const updatedRecord = {
      title: updatedTitle,
      description: updatedDescription,
      completed: updatedCompleted,
      setReminder: updatedReminder,
      due: updatedDue,
    };

    axios
      .put(`http://localhost:8000/todo/${id}/`, updatedRecord)
      .then((response) => {
        alert("Record updated successfully");
      })
      .catch((error) => {
        alert("Error updating record");
      });
    console.log(updatedRecord);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        {
          <div className="Container mx-5 my-5" style={{ width: "70%" }}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Enter title:
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={updatedTitle}
                onChange={(event) =>
                  setUpdatedTitle(event.target.value.toUpperCase())
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="textarea" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="textarea"
                rows="4"
                value={updatedDescription}
                onChange={(event) =>
                  setUpdatedDescription(event.target.value)
                }></textarea>
            </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="slide"
                checked={updatedReminder}
                onChange={(event) => setUpdatedReminder(event.target.checked)}
                value={updatedReminder ? "on" : "off"}
              />
              <label className="form-check-label" htmlFor="slide">
                Set Reminder
              </label>
            </div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateTimePicker"]}>
                <DemoItem label="Due">
                  {updatedReminder ? (
                    <DateTimePicker
                      defaultValue={dayjs(due)}
                      disablePast
                      views={["year", "month", "day", "hours", "minutes"]}
                      onChange={(value) => setUpdatedDue(value)}
                    />
                  ) : (
                    <DateTimePicker
                      defaultValue={dayjs(due)}
                      disablePast
                      views={["year", "month", "day", "hours", "minutes"]}
                      disabled
                    />
                  )}
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="box"
                checked={updatedCompleted}
                onChange={(event) => setUpdatedCompleted(event.target.checked)}
              />

              <label className="form-check-label" htmlFor="box">
                Completed
              </label>
            </div>
            <div className="col-6">
              <button type="submit" className="bt" id="addBtn">
                Update
              </button>
              <Link to="/update" className="lin">
                <button type="button" id="backBtn" className="w-20 mx-3 my-3">
                  Back
                </button>
              </Link>
            </div>
          </div>
        }
      </form>
    </>
  );
}
