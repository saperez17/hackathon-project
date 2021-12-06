import React from "react";
import BrandedContainer from "components/BrandedContainer";
import styled from "styled-components";
import { Divider, Card } from "antd";
import { ContentFeedContainer } from "components/BrandedContainer";
import { Carousel } from "react-responsive-carousel";
import useAuthContext from "hooks/useAuthContext";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const { Meta } = Card;

const DashboardContainer = styled.div`
  width: 100%;
`;

const Dashboard = () => {
  const [userState] = useAuthContext();
  console.log("userState", userState.services);
  return (
    <ContentFeedContainer>
      <DashboardContainer>
        <div>
          <p>Mi cuenta</p>
          <h2>Alejandro Alvarado</h2>
        </div>
        <Divider />
        <div>
          <h3>Servicios favoritos</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Carousel showThumbs={false} centerMode={true} centerSlidePercentage={50}>
              {userState.services.favourites.map((service) => (
                <Card
                  key={service.id}
                  cover={
                    <img
                      alt={service.name}
                      src={service.url}
                      style={{
                        objectFit: "cover",
                        width: "80px",
                        height: "100%",
                      }}
                    />
                  }
                >
                  <Meta
                    title={service.name}
                    description={service.serviceZone}
                  />
                </Card>
              ))}
            </Carousel>
          </div>
        </div>
        <Divider />
      </DashboardContainer>
    </ContentFeedContainer>
  );
};

export default Dashboard;
