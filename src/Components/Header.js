import React from "react";
import styled from "styled-components";

const Header = (props) => <HeaderWrapper>{props.children}</HeaderWrapper>;

export default Header;

const HeaderWrapper = styled.div`
  color: #182214;
  border-bottom: 2px solid #182214;
  font-size: 1.8rem;
`;
