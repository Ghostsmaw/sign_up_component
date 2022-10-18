import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <Container>
      <div>
        <h1>
          Explore <br /> your business
        </h1>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
      backdrop-filter: blur(35px);
      padding: 0.95em;
      border-radius: 10px;
      margin: 1em;
  }

  h1 {
    font-size: 5rem;
    font-weight: 900;
    color: #fff;
    margin-left: 0.5em;

    @media (max-width: 900px) {
      display: none;
    }
  }
`;

export default Main;
