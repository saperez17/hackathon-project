import styled from "styled-components";

export const StyledCardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5vh;
`;
const StyledCard = styled.div`
  position: relative;
  width: 600px;
  padding: 20px;
  max-width: 85vw;
  height: 50vh;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 0.3);
  background-image: ${({imageUrl}) => imageUrl ? `url(${imageUrl})` : ''};
`;

const StyledCardHeader = styled.h3`
  position: absolute;
  bottom: 10px;
  color: white;
`;

const Card = ({ title, imageUrl }) => {
    console.log('url', imageUrl)
  return (
    <StyledCard imageUrl={imageUrl}>
      <StyledCardHeader>{title}</StyledCardHeader>
    </StyledCard>
  );
};
export default Card;
