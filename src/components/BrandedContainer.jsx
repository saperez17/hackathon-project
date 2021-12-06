import React from 'react';
import styled from 'styled-components';
import { Row } from "antd";

const BrandedContainer = styled(Row)`
  background: linear-gradient(
    180deg,
    rgba(255, 159, 28, 1) 10%,
    rgba(255, 0, 228, 1) 100%
  );
  height: ${window.innerHeight};
  overflow: hidden;
  position: fixed;
`;

export const ContentFeedContainer = styled(Row)`
  background: linear-gradient(
    180deg,
    rgba(255, 190, 103, 1) 10%,
    rgba(255, 205, 205, 1) 100%
  );

  overflow: hidden;
  position: fixed;
  overscroll-behavior: contain;
  width: 100%;
  display: flex;
  align-content: flex-start;
  height: ${window.innerHeight}px;
`;

export default BrandedContainer;