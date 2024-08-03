import React from "react";
import { Link } from "react-router-dom";
import { Tablet, Desktop } from './../Responsive';
import styled from "styled-components";
import SubscribeForm from "../components/SubscribeForm";


const Wrapper = styled.div`
  min-height: 50vh;
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  
  //  a {
  //   padding: 10px 15px;
  //   background: var(--primary-color);
  //   color: white;
  //   font-size: 20px;
  //   font-weight: 500;
  //   border-radius: 30px;
  //   text-decoration: none;
  // }
  .more a:hover {
    // color: #0a0f83;
    // font-weight: 700;
  }
  .hero {
  height: 60vh;
  width: 100%;
  background-image: url("/images/home1.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 20px;
  ${Tablet({ height: '85vh' })}
  }
  .hero h1 {
    margin: 20px 0;
    font-weight: 700;
    ${Tablet({ fontSize: '55px', margin: "30px 0" })}
  }
  .hero p{
    font-weight: 500;
    ${Tablet({ fontSize: '20px', width: "725px" })}
  }
  .hero a{
    padding: 10px 15px;
    background: var(--primary-color);
    color: white;
    font-size: 20px;
    font-weight: 500;
    border-radius: 10px;
    text-decoration: none;
  }
  .about{
      padding: 30px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
  }
  .about .img-container{
      width: 80%;
      margin: 30px 0;
      height: 35vh;
      ${Tablet({ width: "35%", height: '50vh' })}
      ${Desktop({ width: "30%", height: '60vh' })}
  }
  .about .img-container img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
  }
  .about h3{
      text-align: center;
      margin: 20px 0;
      font-weight: 600;
      ${Tablet({ width: "40%" })}
  }
  .about p{
      margin: 20px 0; 
      ${Tablet({ width: "40%" })}
  }
  .our-gallery{
      background: rgba(226, 223, 223, 1);
      padding: 30px 10px;
  }
  .our-gallery h3{
      text-align: center;
      margin: 0 0 20px 0;
      padding: 0;
      font-weight: 600;
      ${Tablet({ padding: '20px' })}
  }
  .our-gallery .gallery{
      display: grid;
      grid-template-columns: 45% 45%;
      gap: 5px;
      padding: 0px 0;
      justify-content: center;
      ${Tablet({ gridTemplateColumns: '33% 33% 33%', gap: '10px', padding: '0 20px' })}
      ${Desktop({ gap: '20px', padding: '0 30px' })}
  }
  .our-gallery .gallery .img-container{
      width: 100%;
      height: 20vh;
      padding: 0;
      margin: 0;
      ${Tablet({ height: '40vh' })}
      ${Desktop({ height: '40vh' })}
  }
 .our-gallery .gallery .img-container img{
      width: 100%;
      height: 100%;
      object-fit: cover;
  }
.training .intro{
    display: grid;
    grid-template-columns: 90%;
    gap: 5px;
    padding: 0px 10px;
    justify-content: center;
    ${Tablet({ gridTemplateColumns: '45% 45%', gap: '10px', padding: '0 20px' })}
}
.training .intro .img-container{
      width: 100%;
      height: 30vh;
      padding: 0;
      margin: 0;
      ${Tablet({ height: '45vh' })}
      ${Desktop({ height: '50vh' })}
  }
.training .intro .img-container img{
      width: 100%;
      height: 100%;
      object-fit: cover;
 }
.training .intro .content{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
       ${Tablet({ paddingLeft: '20px' })}
}
.training .intro .content h6{
     line-height: 1.6;
}
.training .intro .content .wel{
      font-size: 12px;
      margin-top: 20px;
      color: rgba(0, 0, 0, 0.8);
      ${Tablet({ fontSize: '14px' })}
}
.training .intro .content a{
    padding: 7px 12px;
    margin: 10px 0;
    background: var(--primary-color);
    color: white;
    font-weight: 500;
    border-radius: 5px;
    border: 0;
    text-decoration: none;
}
.training .training-video{
    background: rgba(226, 223, 223, 1);
    padding: 30px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
}
.training .training-video h6{
      margin: 20px 5px;
      ${Tablet({ fontSize: '18px' })}
      ${Desktop({ fontSize: '20px' })}
}
.training .training-video .video-container{
      width: 100%;
      height: 30vh;
      padding: 0;
      margin-bottom: 30px;
      ${Tablet({ width: '80%', height: '50vh' })}
      ${Desktop({ height: '60vh' })}
}
.training .training-video .video-container video{
      width: 100%;
      height: 100%;    
}
.products{
    padding: 30px 10px;
    display: grid;
    grid-template-columns: 70%;
    justify-content: center;
    gap: 15px;
    ${Tablet({ gridTemplateColumns: '30% 30% 30%', gap: '20px' })}
    ${Tablet({ gridTemplateColumns: '25% 25% 25%', gap: '30px' })}
}
.products .product1, .products .product2, .products .product3{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35vh;
    padding: 0 10px;
    background-color: rgba(226, 223, 223, 1);
    background-image: url('/images/product1.jpg');
    background-size: cover;
    ${Tablet({ padding: '0 10px', height: '50vh' })}
    ${Desktop({ height: '60vh' })}
}
.products h3{
    color: white;
    font-weight: 700;
}
.stories{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35vh;
    padding: 0 10px;
    margin: 20px 0;
    background-image: url('/images/stories.jpg');
    background-size: cover;
}
.stories h3{
    color: white;
    font-weight: 700;
}
.contact{
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   padding: 20px;
}
.contact h2{
    color: rgba(0, 0, 0, 0.5);
    font-weight: 700;
}
.contact h5{
    font-size: 16px;
    ${Tablet({ fontSize: '20px' })}
}
.contact a{
    padding: 5px 10px;
    background: var(--primary-color);
    color: white;
    font-size: 20px;
    font-weight: 500;
    border-radius: 5px;
    text-decoration: none;
}

}
`;


const Home = () => {


  return (
    <Wrapper>
      <div className="hero">
        <h1>Stay Safe with Gemhands</h1>
        <p>
          Join Gemhands (Fulma Academy) and learn practical self-defense for real-world situations.
        </p>
        <Link to="/" className="">START YOUR TRAINING</Link>
      </div>
      <div className="about" id="about">
        <div className="img-container">
          <img src="/images/about.jpg" alt="about" />
        </div>
        <h3>Empowering Self-Defense for a Safer World</h3>
        <p>
          At Gemhands, we are dedicated to reducing the rate of physical and sexual assaults, violence, robbery,
          and kidnapping through comprehensive self-defense training, specialized self-defense products, and
          advocacy for self-defense, and climate change awareness. Our mission is to empower individuals with the
          knowledge and tools to protect themselves and their loved ones, creating a safer, more secure
          community for all.
        </p>
      </div>
      <div className="our-gallery">
        <h3>Explore Our Self Defense Training Gallery</h3>
        <div className="gallery">
          <div className="img-container">
            <img src="/images/gallery1.jpg" alt="gallery" />
          </div>
          <div className="img-container">
            <img src="/images/gallery2.jpg" alt="gallery" />
          </div>
          <div className="img-container">
            <img src="/images/gallery3.jpg" alt="gallery" />
          </div>
          <div className="img-container">
            <img src="/images/gallery1.jpg" alt="gallery" />
          </div>
          <div className="img-container">
            <img src="/images/gallery2.jpg" alt="gallery" />
          </div>
          <div className="img-container">
            <img src="/images/gallery2.jpg" alt="gallery" />
          </div>
        </div>
      </div>
      <div className="training">
        <div className="intro">
          <div className="img-container">
            <img src="/images/home1.png" alt="training" />
          </div>
          <div className="content">
            <p className="wel">Hello, welcome to your self defence training academy</p>
            <h3>FULMA ACADEMY</h3>
            <h6>
              Learn practical self-defense techniques from certified instructors. Join our classes today and
              build confidence while getting fit!
            </h6>
            <Link to='/' className="">FIND OUT MORE</Link>
          </div>

        </div>

        <div className="training-video">
          <h6>Check out this great video</h6>
          <div className="video-container">
            <video controls>
              <source src="/images/training.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <section className="products">
        <div className="product1">
          <h3>New Products</h3>
        </div>
        <div className="product2">
          <h3>Most Popular</h3>
        </div>
        <div className="product2">
          <h3>Best Value</h3>
        </div>
      </section>
      <section className="stories">
        <h3>Hear from our students</h3>
      </section>
      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <h5 className="my-2 mx-1">Better yet, see us in person!</h5>
        <p className="my-3">If you have questions about the opportunities available to you in our program, send us a message.
          We will get back to you as soon as possible.
        </p>
        <h5 className="my-2 mx-1">GemhandsGlobal</h5>
        <h5 className="my-2 mx-1">Hours</h5>
        <p>Open today 09:00 – 17:00</p>
        <Link to='https://forms.gle/Wi9t9hVjmgmtUqmX8' target="_blanck" className="my-2" >Get in Touch</Link>
      </section>
      <section className="subscribe">
        <SubscribeForm />
      </section>

    </Wrapper>
  );
};

export default Home;
