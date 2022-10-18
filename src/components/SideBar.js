import React from "react";
import styled from "styled-components";
import logo from "../assets/whatsapp.png";
import Input from "./Input";

const SideBar = () => {
  return (
    <Container>
      <LogoWrapper>
        <img src={logo} alt="logo" />
        <h3>
          Ghost <span>Business</span>
        </h3>
      </LogoWrapper>
      <Form>
        <h3>Sign Up</h3>
        <Input placeholder="Full Name" />
        <Input type="email" placeholder="Email"/>
        <Input type="password" placeholder="Password"/>
        <Input type="password" placeholder="Confirm Password"/>
        <button>Sign Up</button>
      </Form>
      <div>
          <Terms>
              By signing up, I agree to the privacy policy <br/> and Terms of Service.
          </Terms>
          <h4>Already have an account? <span>Sign In</span></h4>
      </div>
    </Container>
  );
};

const Terms = styled.p`
    padding: 0 3rem;
    text-align: center;
    font-size: 10px;
    color: #808080;
    font-weight: 300;

`

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        color: #666666;
        margin-bottom: 2rem;
    }

    button {
        width: 60%;
        max-width: 350px;
        min-width: 250px;
        height: 40px;
        border: none;
        margin: 1rem 0;
        box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        background-color: #25D366;
        color: #fff;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease-in;

        &:hover {
            transform: translateY(-3px);
        }
    }
`;

const LogoWrapper = styled.div`
    text-align: center;
    margin-bottom: 3em;

    img {
        height: 5rem;
        margin-bottom: 1em;
    }

    h3 {
        text-align: center;
        color: #ff8d8d;
        font-size: 1.35rem;
    }

    span {
        color: #5dc399;
        font-weight: 300;
    }
`;

const Container = styled.div`
  min-width: 500px;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;

  @media (max-width: 900px) {
      width: 100vw;
      position: absolute;
      padding: 0;
  }

  h4 {
      color: #808080;
      font-weight: bold;
      font-size: 13px;
      margin-top: 2rem;
      text-align: center;

      span {
        color: #ff8d8d;
        cursor: pointer;
      }
  }
`;

export default SideBar;
