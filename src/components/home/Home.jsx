import React from 'react';
import { Link } from 'react-router-dom';
import { WELCOME_HEADING, BUTTON_TEXT } from '../../constants/HomeConstants';

const Home = () => (
  <>
    <h1>{WELCOME_HEADING}</h1>
    <button type="button"><Link to="/">{BUTTON_TEXT}</Link></button>
  </>
);
export default Home;
