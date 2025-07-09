import { useState } from "react";
import Card from "antd/es/card/Card";
import Title from "antd/es/typography/Title";
import { Button, Col, Row } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

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

    days.push(
      <Card
        key={`day-{i}`}
        hoverable
        style={{
          backgroundColor: isToday ? "#d8b4fe" : "fff",
          cursor: "pointer",
          
        }}
      >
        {i}
      </Card>
    );
  }

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

      <Row
        gutter={[8, 8]}
        justify="center"
        style={{ textAlign: "center" }}
      >
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
    </div>
  );
};

export default Calender;
