import React, { useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Player } from "video-react";
import videoFile1 from "../video/react_textUtils.mp4";
import videoFile2 from "../video/ecommerce_website.mp4";
import videoFile3 from "../video/swings.mp4";
import videoFile4 from "../video/react_textUtils.mp4";
import "../../node_modules/video-react/dist/video-react.css";

export const UserForm = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [cmplted, setCmplted] = useState(false);
  const [reminder, setReminder] = useState(false);
  const [due, setDue] = useState(new Date());
  const today = dayjs();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = [videoFile1, videoFile2, videoFile3, videoFile4];

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/todo/", {
        title: title.toUpperCase(),
        description: desc || "",
        completed: cmplted,
        setReminder: reminder,
        due: due,
      });
      alert("Item added successfully");
    } catch (error) {
      alert("Error saving item");
    }
  };

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  return (
    <>
      <div className="Container mx-5 my-5">
        <form
          onSubmit={handleForm}
          style={{ display: "inline-block", width: "70%" }}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Enter title:
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              value={desc}
              onChange={(e) => setDesc(e.target.value)}></textarea>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="slide"
              value={reminder}
              onChange={(e) => setReminder(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="slide">
              Set Reminder
            </label>
          </div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateTimePicker"]}>
              <DemoItem label="Due">
                {reminder ? (
                  <DateTimePicker
                    defaultValue={today}
                    disablePast
                    views={["year", "month", "day", "hours", "minutes"]}
                    onChange={(value) => setDue(value)}
                  />
                ) : (
                  <DateTimePicker
                    defaultValue={today}
                    disablePast
                    views={["year", "month", "day", "hours", "minutes"]}
                    disabled
                  />
                )}
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
          <div>
            <button type="submit" className=" bt my-3" id="addBtn">
              Add
            </button>
            <Link to="/" className="lin">
              <button type="button" id="backBtn" className="w-20 mx-3 my-3">
                Back
              </button>
            </Link>
          </div>
        </form>
        <div
          className="player-wrapper"
          style={{
            display: "inline-block",
            width: "20%",
            marginLeft: "10px",
          }}>
          <Player
            playsInline
            autoPlay
            src={videos[currentVideoIndex]}
            onEnded={handleVideoEnd}
            fluid={false}
            width={420}
            height={400}
          />
        </div>
      </div>
    </>
  );
};
