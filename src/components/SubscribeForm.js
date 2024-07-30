import { useState } from 'react';
// import { Link } from "react-router-dom";
// import { Tablet } from './../Responsive';
import styled from "styled-components";
import { database } from '../config/firebaseConfig';


const Wrapper = styled.div`
height: 50vh;
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  `


function SubscribeForm() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await database.collection('subscribers').add({ email });
            setMessage('Thank you for subscribing!');
            setEmail('');
        } catch (error) {
            setMessage('There was an error. Please try again.');
        }
    };

    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />
                <button type="submit">Subscribe</button>
            </form>
            {message && <p>{message}</p>}
        </Wrapper>
    );
};


export default SubscribeForm;