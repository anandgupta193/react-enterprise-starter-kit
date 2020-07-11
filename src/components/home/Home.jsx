import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../pureComponents/Button/Button';
import { WELCOME_HEADING, BUTTON_TEXT } from '../../constants/HomeConstants';

const Home = () => (
  <>
    <h1>{WELCOME_HEADING}</h1>
    <Button value={<Link to="/">{BUTTON_TEXT}</Link>} />
  </>
);
export default Home;
