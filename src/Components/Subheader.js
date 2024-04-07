import React from "react";
import styled from "styled-components";

const Subheader = (props) => (
  <SubHeaderWrapper>{props.children}</SubHeaderWrapper>
);

const SubHeaderWrapper = styled.div`
  color: #182214;
  font-size: 1rem;
  margin: 1rem auto;
  text-align: center;
`;

export default Subheader;
