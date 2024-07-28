import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Tablet } from "../Responsive";


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
   
  .hero .hero-bg{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: -1;
}
   .hero .slide {
    height: 40vh;
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
    ${Tablet({ height: '60vh' })}
  }

  .hero .slide .product-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
    .hero .slide .hero1 {
     background-image: url("/images/home1.png");
    background-size: cover;
    position: relative;
  }
     .hero .slide .hero2 {
     background-image: url("/images/home2.png");
    background-size: cover;
    position: relative;
  }
  .hero .slide .product-container img {
     height: 100%;
     width: 100%;
     onject-fit: cover;
  }

`;


const Home = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // fade: true,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "0",
  };

  return (
    <Wrapper>
      <div className="hero">
        <div class='hero-bg'></div>
        <div className="slide">
          <Slider {...settings}>
            <div className="product-container hero1">
              <h2>welome to jemhands 1</h2>
              <p>learn practical lorem learn practical lorem learn practical lorem learn practical lorem</p>
            </div>
            <div className="product-container hero2">
              <h2>welome to jemhands 2</h2>
              <p>learn practical lorem learn practical lorem learn practical lorem learn practical lorem</p>
            </div>
          </Slider>
        </div>

      </div>
    </Wrapper>
  );
};

export default Home;
