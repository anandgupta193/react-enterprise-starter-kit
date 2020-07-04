import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <h1>Welcome to home</h1>
    <button type="button"><Link to="/">GO BACK</Link></button>
  </>
);
export default Home;
