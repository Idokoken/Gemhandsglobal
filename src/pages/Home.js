import React from "react";
// import { Link } from "react-router-dom";
import { Tablet } from './../Responsive';
import styled from "styled-components";
import SubscribeForm from "../components/SubscribeForm";


const Wrapper = styled.div`
  min-height: 50vh;
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;

  h1 {
    margin: 30px;
    font-family: "Spectral SC", serif;
    text-align: center;
  }
  
   a {
    padding: 10px 15px;
    background: var(--primary-color);
    color: white;
    font-size: 20px;
    font-weight: 500;
    border-radius: 30px;
    text-decoration: none;
  }
  .more a:hover {
    // color: #0a0f83;
    // font-weight: 700;
  }
    .hero {
    height: 50vh;
    width: 100%;
    background-image: url("/images/home1.png");
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    ${Tablet({ height: '85vh' })}
    }
    
     

`;


const Home = () => {


  return (
    <Wrapper>
      <div className="hero">
        <h1>Welcome to Gemhandsglobal</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        </p>
      </div>
      <div className="mail">
        <SubscribeForm />
      </div>
    </Wrapper>
  );
};

export default Home;
