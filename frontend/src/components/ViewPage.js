import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import soundFile from "../music/sound1.mp3";

export default function ViewPage() {
  const [viewData, setData] = useState([]);
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

  useEffect(() => {
    const setAlarm = (dateString) => {
      const alarmTime = new Date(dateString);
      const currentTime = new Date();

      if (alarmTime >= currentTime) {
        const timeUntilAlarm = alarmTime - currentTime;
        console.log(currentTime, alarmTime);
        setTimeout(() => {
          showNotification();
        }, timeUntilAlarm);
      }
    };

    const showNotification = () => {
      if (Notification.permission === "granted") {
        new Notification("Alarm", {
          body: "It's time for your reminder!",
        });
        playNotificationSound();
      } else {
        if (Notification.permission !== "denied") {
          Notification.requestPermission().then((permission) => {
            if (permission === "granted") {
              new Notification("Alarm", {
                body: "It's time for your reminder!",
              });
              playNotificationSound();
            }
          });
        }
      }
    };

    const playNotificationSound = () => {
      const audio = new Audio(soundFile);
      audio.play();
    };

    axios
      .get("http://localhost:8000/todo/")
      .then((response) => {
        const data = response.data;
        setData(data);
        data.forEach((item) => {
          if (item.setReminder) {
            setAlarm(item.due);
          }
        });
      })
      .catch((error) => {
        console.log("Error fetching data", error);
      });
  }, []);

  return (
    <>
      <div className="container mx-5 my-5">
        <h3 className="my-3" style={{ textAlign: "left" }}>
          To Do List:
        </h3>
        <div className="accordion" id="accordionExample">
          {viewData.map((record) => (
            <div className="accordion-item" key={record.id}>
              <h2 className="accordion-header" id={`heading-${record.id}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse-${record.id}`}
                  aria-expanded="false"
                  aria-controls={`collapse-${record.id}`}>
                  {record.title}
                  {record.completed ? (
                    <span className="badge bg-success mx-2"> completed</span>
                  ) : (
                    <span className="badge bg-warning mx-2">Not completed</span>
                  )}
                </button>
              </h2>
              <div
                id={`collapse-${record.id}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading-${record.id}`}
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  {record.description}
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
                </div>
              </div>
            </div>
          ))}
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
