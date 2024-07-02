import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
// import { Tablet, Desktop } from "../Responsive";


const Wrapper = styled.div`
  min-height: 50vh;
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;

  h1 {
    margin: 30px;
    font-family: "Spectral SC", serif;
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
`;





const Home = () => {


    return (
        <Wrapper>
            <h1>Welocome to Gemhandsglobal</h1>
        </Wrapper>
    );
};

export default Home;
