import React from "react";
import TinderCard from "react-tinder-card";
import { Col, Row } from "antd";
import theme from "theme";
import Card, { StyledCardContainer } from "components/Card";
import SwipeButtons from 'components/SwipeButtons';
import Header from 'components/Header'

const people = [
  {
    name: "Chelsey Brindgthon",
    url: "https://i.pinimg.com/originals/6e/70/97/6e7097e29b6bc038069e5b375069c1c7.jpg",
  },
];

const onSwipe = (direction) => {
  console.log("You swiped: " + direction);
};

const onCardLeftScreen = (myIdentifier) => {
  console.log(myIdentifier + " left the screen");
};

const Home = () => {
  return (
    <Row
      style={{
        background:
          "linear-gradient(180deg, rgba(255,190,103,1) 10%, rgba(255,205,205,1) 100%)",
        height: window.innerHeight,
        overflow: "hidden",
        position: "fixed",
        overscrollBehavior: "contain",
        width: "100%",
        display: 'flex',
        alignContent: 'flex-start'
        // flexDirection: 'row',
        // justifyContent:'flex-start'
      }}
    >
      <Col
        span={24}
        style={{
          padding: "0",
          margin: "0",
        }}
        
      >
        {/* <div
          onClick={() => console.log("clicked")}
          style={{
            margin: "15px 0 0 15px",
            width: "fit-content",
          }}
        ></div> */}

        <Header/>
      </Col>
      <Col
        span={24}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        //   padding: "30px",
          marginBottom: "1.5rem",
        }}
      >
        <div>
          <h1
            style={{
              color: theme.colors.primary,
            }}
          >
            <StyledCardContainer>
              {people.map((person) => (
                <TinderCard key={person.name} preventSwipe={["up", "down"]}>
                  <Card title={person.name} imageUrl={person.url}/>
                </TinderCard>
              ))}
            </StyledCardContainer>
          </h1>
        </div>
      </Col>
      <Col span={24}>
      <SwipeButtons/>
      </Col>
    </Row>
  );
};

export default Home;
