import React from "react";
import styled from "styled-components";

const ContentWrapper = (props) => (
  <StyledContent>{props.children}</StyledContent>
);

export default ContentWrapper;

const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: column;
  letter-spacing: 0.3rem;
  border: 1px solid #111910;
  flex: 1 1 auto;
`;
