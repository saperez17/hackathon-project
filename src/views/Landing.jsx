import React, { useState } from "react";
import { Col, Button } from "antd";
import home_image_meet_team from "assets/undraw_meet_the_team.svg";
import styled from "styled-components";
import Login from "components/Login";
import Signup from "components/Signup";
import BrandedContainer from 'components/BrandedContainer';
export const LANDING_SECTIONS = {
  MAIN: 1,
  SINGUP: 2,
  LOGIN: 3,
};

const ReleventInfoItem = styled.li`
  ::before {
    content: "⚡️";
  }
`;


const LandingHeader = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const LandingBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  padding-right: 60px;
`;

const LandingFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LandingMain = ({ changeSection }) => {
  return (
    <>
      <Col
        span={24}
        style={{
          height: window.innerHeight * 0.35,
        }}
      >
        <LandingHeader>
          <h1 className="fc-white">App Name</h1>
          <img alt="app_image" src={home_image_meet_team} height={150} />
        </LandingHeader>
      </Col>
      <Col
        span={24}
        style={{
          height: window.innerHeight * 0.45,
        }}
      >
        <LandingBody>
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
        </LandingBody>
      </Col>
      <Col
        span={24}
        style={{
          height: window.innerHeight * 0.2,
        }}
      >
        <LandingFooter>
          <div>
            <Button
              type="primary"
              onClick={() => changeSection(LANDING_SECTIONS.SINGUP)}
            >
              Sign up
            </Button>
          </div>
          <div
            style={{
              marginTop: "10px",
            }}
          >
            <Button onClick={() => changeSection(LANDING_SECTIONS.LOGIN)}>
              Log in
            </Button>
          </div>
        </LandingFooter>
      </Col>
    </>
  );
};

const Landing = () => {
  const [section, setSection] = useState(LANDING_SECTIONS.MAIN);

  const changeSectionHandler = (value) => setSection(value);

  const renderSection = () => {
    switch (section) {
      case LANDING_SECTIONS.LOGIN:
        return <Login changeSection={changeSectionHandler} />;
      case LANDING_SECTIONS.SINGUP:
        return <Signup changeSection={changeSectionHandler} />;
      default:
        return <LandingMain changeSection={changeSectionHandler} />;
    }
  };

  return <BrandedContainer>{renderSection()}</BrandedContainer>;
};

export default Landing;
