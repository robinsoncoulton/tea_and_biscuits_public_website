import React from "react";
import styled from "styled-components";

const List = (props) => <StyledList>{props.children}</StyledList>;

const StyledList = styled.ul`
  list-style-type: none;
  color: #182214;
  padding: 0;
  margin: 0;
  font-size: 1.2rem;
  text-align: center;
  margin-top: 2rem;
`;

export default List;
