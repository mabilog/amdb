import React from "react";
import styled from "styled-components";
const Loading = () => {
  return <LoadingWrapper>Loading</LoadingWrapper>;
};

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export default Loading;
