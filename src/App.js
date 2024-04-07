import "./App.css";
import Background from "./Components/Background";
import Header from "./Components/Header";
import SubHeader from "./Components/Subheader";
import Footer, { FooterSpacer } from "./Components/Footer";
import "./Fonts/Rockwell.ttc";
import List from "./Components/List";
import Image from "./Components/Image";
import styled from "styled-components";
import ContentWrapper from "./Components/ContentWrapper";

function App() {
  return (
    <>
      <Background className="font-face-rw">
        {/* <Image
          src="tea_and_biscuits_public_website/src/Assets/hp.jpeg"
          alt="British houses of Parliament"
        ></Image> */}
        <ContentWrapper>
          <HeaderWrapper>
            <Header>TEA & BISCUITS</Header>
            <SubHeader>LANGUAGE SERVICES</SubHeader>
          </HeaderWrapper>
          <List>
            <li>英國留學代辦</li>
            <li>英式英語IPA發音</li>
            <li>學術撰寫</li>
            <li>學術論文校對</li>
            <li>雅思考試</li>
          </List>
          <FooterSpacer transparent />
        </ContentWrapper>
      </Background>
      <Footer>
        <FooterWrapper>
          <p>0978-703-390</p>
          <p>info@teaandbiscuits.tw</p>
          <p>V.A.T No. 90658097</p>
        </FooterWrapper>
      </Footer>
    </>
  );
}

export default App;

const HeaderWrapper = styled.div`
  margin-top: 8rem;
`;

const FooterWrapper = styled.div`
  margin: 1rem 0 2rem 0;
`;
