import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@storybook/react/demo';
import { WELCOME_HEADING, BUTTON_TEXT } from '../../constants/HomeConstants';

const Home = () => (
  <>
    <h1>{WELCOME_HEADING}</h1>
    <Button type="button"><Link to="/">{BUTTON_TEXT}</Link></Button>
  </>
);
export default Home;
