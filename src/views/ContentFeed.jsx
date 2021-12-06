import React, { useMemo, useState, useRef } from "react";
import TinderCard from "react-tinder-card";
import { Col, Row } from "antd";
import theme from "theme";
import Card, { StyledCardContainer } from "components/Card";
import SwipeButtons from "components/SwipeButtons";
import Header from "components/Header";
import styled from "styled-components";
import CitySelector from "components/CitySelector";
import ContentFeedContextProvider from "contexts/ContentFeedContext";
import useContentFeedContext from "hooks/useContentFeedContext";
import { ContentFeedContainer } from "components/BrandedContainer"

const onSwipe = (direction) => {
  console.log("You swiped: " + direction);
};

const onCardLeftScreen = (service) => {};


const ServiceMatcher = () => {
  const [contentFeedState, dispatch] = useContentFeedContext();
  const filteredServices = contentFeedState.services.filter(
    (service) => service.serviceZone === contentFeedState.serviceZone
  );
  const [currentIndex, setCurrentIndex] = useState(filteredServices.length - 1);
  const [lastDirection, setLastDirection] = useState();

  const currentIndexRef = useRef(currentIndex);
  const childRefs = useMemo(
    () =>
      Array(filteredServices.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < filteredServices.length - 1;

  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  };

  const swipe = async (dir) => {
    console.log("childRefs[currentIndex]", childRefs[currentIndex]);
    console.log("childRefs", childRefs);
    if (canSwipe && currentIndex < filteredServices.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  return (
    <>
      <Col
        span={24}
        style={{
          padding: "0",
          margin: "0",
        }}
      >
        <Header />
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
              {filteredServices.map((service, index) => (
                <TinderCard
                  ref={childRefs[index]}
                  className="swipe"
                  key={service.name}
                  preventSwipe={["up", "down"]}
                  onCardLeftScreen={() => outOfFrame(service.name, index)}
                  onSwipe={(dir) => swiped(dir, service.name, index)}
                >
                  <Card title={service.name} imageUrl={service.url} />
                </TinderCard>
              ))}
            </StyledCardContainer>
          </h1>
        </div>
      </Col>
      <Col span={24}>
        <SwipeButtons swipe={swipe} />
      </Col>
    </>
  );
};

const ContentFeed = () => {
  return (
    <ContentFeedContextProvider>
      <ContentFeedContainer>
        <CitySelector>
          <ServiceMatcher />
        </CitySelector>
      </ContentFeedContainer>
    </ContentFeedContextProvider>
  );
};

export default ContentFeed;
