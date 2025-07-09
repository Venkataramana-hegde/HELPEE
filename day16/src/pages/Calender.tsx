import { useState, useEffect } from "react";
import Card from "antd/es/card/Card";
import Title from "antd/es/typography/Title";
import { Button, Col, Input, Row } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import { FaRegNoteSticky } from "react-icons/fa6";
import { MdEventAvailable } from "react-icons/md";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calender = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  const [addEventVisibility, setAddEventVisibility] = useState(false);
  const [addNotesVisibility, setAddNotesVisibility] = useState(false);
  const [eventInput, setEventInput] = useState("");
  const [noteInput, setNoteInput] = useState("");
  const [eventTime, setEventTime] = useState("");

  const [showEventAndTask, setShowEventAndTask] = useState(false);

  const [selectedDate, setSelectedDate] = useState<string>("");

  const [eventData, setEventData] = useState<{
    [date: string]: { text: string; time: string }[];
  }>({});
  const [noteData, setNoteData] = useState<{ [date: string]: string[] }>({});

  const getPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const getNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const getNextYear = () => {
    setCurrentYear((prevYear) => prevYear + 1);
  };

  const getPreviousYear = () => {
    setCurrentYear((prevYear) => prevYear - 1);
  };

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth);

  const days = [];

  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={i}></div>);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const isToday =
      i === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear();

    // days.push(
    //   <Card
    //     key={`day-${i}`}
    //     hoverable
    //     onClick={(e) => {
    //       e.stopPropagation();
    //       const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(
    //         2,
    //         "0"
    //       )}-${String(i).padStart(2, "0")}`;
    //       setSelectedDate(dateStr);
    //       setShowEventAndTask(true);
    //       setMenuVisibility(false);
    //     }}
    //     onContextMenu={(e) => {
    //       e.preventDefault();
    //       e.stopPropagation();
    //       const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(
    //         2,
    //         "0"
    //       )}-${String(i).padStart(2, "0")}`;
    //       setSelectedDate(dateStr);
    //       setMenuPosition({ x: e.clientX, y: e.clientY });
    //       setMenuVisibility(true);
    //       setShowEventAndTask(false);
    //     }}
    //     style={{
    //       backgroundColor: isToday ? "#d8b4fe" : "#fff",
    //       cursor: "pointer",
    //     }}
    //   >
    //     {i}
    //   </Card>
    // );
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(
      2,
      "0"
    )}-${String(i).padStart(2, "0")}`;
    const hasEvent = eventData[dateStr]?.length > 0;
    const hasNote = noteData[dateStr]?.length > 0;

    days.push(
      <Card
        key={`day-${i}`}
        hoverable
        onClick={(e) => {
          e.stopPropagation();
          setSelectedDate(dateStr);
          setShowEventAndTask((prev) =>
            prev && selectedDate === dateStr ? false : true
          ); // toggle if same day
          setMenuVisibility(false);
        }}
        onContextMenu={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setSelectedDate(dateStr);
          setMenuPosition({ x: e.clientX, y: e.clientY });
          setMenuVisibility(true);
          setShowEventAndTask(false);
        }}
        style={{
          backgroundColor: isToday ? "#d8b4fe" : "#fff",
          cursor: "pointer",
          position: "relative",
        }}
      >
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <div>{i}</div>

          {(hasEvent || hasNote) && (
            <span
              style={{
                position: "absolute",
                top: 11,
                bottom: 0,
                right: 20,
                fontSize: "12px",
              }}
            >
              {hasEvent && <MdEventAvailable />}{" "}
              {hasNote && <FaRegNoteSticky />}
            </span>
          )}
        </div>
      </Card>
    );
  }

  useEffect(() => {
    const handleClickOutside = () => {
      setMenuVisibility(false);
      setShowEventAndTask(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      if (e.button == 2) {
        setMenuPosition({ x: e.clientX, y: e.clientY });
        setMenuVisibility(true);
      } else if (e.button == 1) {
        setShowEventAndTask(false);
      }
    };

    const handleClick = () => {
      setMenuVisibility(false);
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleEventsClick = () => {
    setAddEventVisibility(true);
    console.log(true);
  };
  const handleNotesClick = () => {
    setAddNotesVisibility(true);
  };

  const handleAddEvent = () => {
    if (!selectedDate || !eventInput.trim()) return;

    const newEvent = {
      text: eventInput.trim(),
      time: eventTime || "00:00", // fallback
    };

    setEventData((prev) => ({
      ...prev,
      [selectedDate]: [...(prev[selectedDate] || []), newEvent],
    }));

    setEventInput("");
    setEventTime(""); // reset time
    setAddEventVisibility(false);
  };

  const handleAddNote = () => {
    // if (!selectedDate) return;
    setNoteData((prev) => ({
      ...prev,
      [selectedDate]: [...(prev[selectedDate] || []), noteInput],
    }));
    setNoteInput("");
    setAddNotesVisibility(false);
  };

  return (
    <div
      style={{
        width: "50%",
        margin: "10px auto",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
      }}
    >
      <div
        style={{ backgroundColor: "#9333ea", color: "#fff", padding: "16px" }}
      >
        <Title
          level={2}
          style={{ textAlign: "center", margin: 0, color: "#fff" }}
        >
          Calendar
        </Title>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px",
        }}
      >
        <Button
          onClick={getPrevMonth}
          icon={<LeftOutlined />}
          style={{ color: "#9333ea", fontSize: "24px" }}
        ></Button>
        <Title level={3} style={{ margin: 0, color: "#933ea" }}>
          {monthNames[currentMonth]} {currentYear}
        </Title>
        <Button
          onClick={getNextMonth}
          icon={<RightOutlined />}
          style={{ color: "#9333ea", fontSize: "24px" }}
        ></Button>
      </div>

      <Row gutter={[8, 8]} justify="center" style={{ textAlign: "center" }}>
        {weekDays.map((day) => (
          <Col span={3} key={day}>
            {day}
          </Col>
        ))}
      </Row>

      <Row
        gutter={[8, 8]}
        justify="center"
        style={{ padding: "16px", textAlign: "center" }}
        className="days-grid"
      >
        {days.map((day, index) => (
          <Col span={3} key={index}>
            {day}
          </Col>
        ))}
      </Row>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px",
        }}
      >
        <Button
          onClick={getPreviousYear}
          icon={<LeftOutlined />}
          style={{ color: "#9333ea", fontSize: "24px" }}
        ></Button>
        <Title level={3} style={{ margin: 0, color: "#933ea" }}>
          {currentYear}
        </Title>
        <Button
          onClick={getNextYear}
          icon={<RightOutlined />}
          style={{ color: "#9333ea", fontSize: "24px" }}
        ></Button>
      </div>
      {menuVisibility && (
        <div
          style={{
            position: "fixed",
            top: `${menuPosition.y}px`,
            left: `${menuPosition.x}px`,
            backgroundColor: "white",
            padding: "10px",
            width: "100px",
            height: "90px",
            border: "none",
            boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px",
            borderRadius: "10px",
            zIndex: 1,
          }}
        >
          <button
            onClick={handleEventsClick}
            style={{
              cursor: "pointer",
              paddingBottom: "10px",
              borderBottom: "1px solid black",
            }}
          >
            Add event
          </button>
          <button
            onClick={handleNotesClick}
            style={{ cursor: "pointer", paddingTop: "10px" }}
          >
            Add notes
          </button>
        </div>
      )}
      {addEventVisibility && (
        <div
          style={{
            position: "fixed",
            top: `${menuPosition.y}px`,
            left: `${menuPosition.x}px`,
            backgroundColor: "white",
            padding: "10px",
            width: "300px",
            height: "200px",
            border: "none",
            boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px",
            borderRadius: "10px",
            zIndex: 1,
          }}
        >
          <label htmlFor="addEvent">Add Event and Time</label>
          <Input
            id="addEvent"
            placeholder="Add birthdays, meetings..."
            value={eventInput}
            onChange={(e) => setEventInput(e.target.value)}
            style={{ marginBottom: "15px", marginTop: "15px" }}
          />
          <label htmlFor="eventTime">Time</label>
          <Input
            id="eventTime"
            type="time"
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
          />

          <button
            onClick={handleAddEvent}
            style={{
              border: "none",
              margin: "5px",
              backgroundColor: "dodgerBlue",
              color: "white",
              padding: "5px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Save
          </button>
        </div>
      )}

      {addNotesVisibility && (
        <div
          style={{
            position: "fixed",
            top: `${menuPosition.y}px`,
            left: `${menuPosition.x}px`,
            backgroundColor: "white",
            padding: "10px",
            width: "300px",
            height: "200px",
            border: "none",
            boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px",
            borderRadius: "10px",
            zIndex: 1,
          }}
        >
          <label htmlFor="addNote">Add Notes</label>
          <textarea
            id="addNote"
            placeholder="Add description..."
            value={noteInput}
            onChange={(e) => setNoteInput(e.target.value)}
          />
          <br />
          <button
            onClick={handleAddNote}
            style={{
              border: "none",
              margin: "5px",
              backgroundColor: "dodgerBlue",
              color: "white",
              padding: "5px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Save
          </button>
        </div>
      )}

      {showEventAndTask && selectedDate && (
        <div
          style={{
            width: "25%",
            height: "100%",
            backgroundColor: "white",
            margin: "auto",
            position: "fixed",
            top: "0",
            right: "0",
            boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px",
            zIndex: 1,
            overflowY: "auto",
            padding: "16px",
          }}
        >
          <Title
            level={2}
            style={{
              textAlign: "center",
              color: "black",
              borderBottom: "1px solid black",
            }}
          >
            Events ({selectedDate})
          </Title>
          {(eventData[selectedDate] || []).map((eventObj, idx) => (
            <p key={idx} style={{ textAlign: "center", color: "black" }}>
              {eventObj.time} - {eventObj.text}
            </p>
          ))}

          <Title
            level={2}
            style={{
              textAlign: "center",
              color: "black",
              borderBottom: "1px solid black",
            }}
          >
            Notes
          </Title>
          {(noteData[selectedDate] || []).map((note, idx) => (
            <p key={idx} style={{ textAlign: "center", color: "black" }}>
              {note}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Calender;
