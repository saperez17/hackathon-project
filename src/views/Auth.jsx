import React from "react";
import { Row, Col, Button } from "antd";
import home_image_meet_team from "assets/undraw_meet_the_team.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ReleventInfoItem = styled.li`
  ::before {
    content: "⚡️";
  }
`;

const Auth = () => {
  return (
    <Row
      style={{
        background:
          "linear-gradient(180deg, rgba(255,159,28,1) 10%, rgba(255,0,228,1) 100%)",
        height: window.innerHeight,
        overflow: "hidden",
        position: "fixed",
      }}
    >
      <Col
        span={24}
        style={{
          height: window.innerHeight * 0.35,
        }}
      >
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <h1 className="fc-white">App Name</h1>
          <img alt="app_image" src={home_image_meet_team} height={150} />
        </div>
      </Col>
      <Col
        span={24}
        style={{
          height: window.innerHeight * 0.45,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "60px",
            paddingRight: "60px",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              color: "aliceblue",
              fontSize: "1.2rem",
            }}
          >
            <ReleventInfoItem>Reason #1</ReleventInfoItem>
            <ReleventInfoItem>Reason #2</ReleventInfoItem>
            <ReleventInfoItem>Reason #3</ReleventInfoItem>
          </ul>
        </div>
      </Col>
      <Col
        span={24}
        style={{
          height: window.innerHeight * 0.2,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <Link to="/signup">
              <Button type="primary">Sign up</Button>
            </Link>
          </div>
          <div
            style={{
              marginTop: "10px",
            }}
          >
            <Link to="/login">
              <Button>Log in</Button>
            </Link>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Auth;
