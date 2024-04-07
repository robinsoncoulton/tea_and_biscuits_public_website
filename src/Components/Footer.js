import React from "react";
import styled from "styled-components";

const Footer = (props) => <FooterContainer>{props.children}</FooterContainer>;

export default Footer;

const FooterContainer = styled.div`
  background-color: #111910;
  height: min-content;
  min-height: min-content;
  max-height: 250px;
  width: 100%;
  position: absolute;
  bottom: 0;
  color: #f3f3f3;
  box-shadow: 1px 10px 10px 19px rgba(0, 0, 0, 0.56);
  opacity: ${({ transparent }) => (transparent ? 0 : 1)};
  display: flex;
  align-items: center;
  flex-flow: column;
  justify-content: space around;
`;

export const FooterSpacer = styled.div`
  background-color: #111910;
  height: 250px;
  width: 100%;
  opacity: ${({ transparent }) => (transparent ? 0 : 1)};
  flex-grow: 1;
`;
