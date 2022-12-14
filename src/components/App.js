import React from "react";
import styled from "styled-components";
import bgImg from "../assets/bg.png";
import SideBar from "./SideBar";
import Main from "./Main";

const App = () => {
  return (
    <Container>
      <Wrapper>
        <SideBar/>
        <Main />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  background: #0C0404;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
const Wrapper = styled.div`
  background-image: url(${bgImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
`;

export default App;
