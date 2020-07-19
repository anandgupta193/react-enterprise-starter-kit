import React from 'react';
import homeStyle from './Home.scss';
import { WELCOME_HEADING } from '../../constants/HomeConstants';
// eslint-disable-next-line import/no-unresolved
import ReactLogo from '../../assets/images/react.webp';

const Home = () => (
  <>
    <span className={homeStyle.forkongithub}>
      <a href="https://github.com/anandgupta193/react-enterprise-starter-kit">
        Fork on GitHub
      </a>
    </span>
    <img className={homeStyle.logo} alt="React-Enterprise-Strater-Kit" src={ReactLogo} />
    <h1 className={homeStyle.heading}>{WELCOME_HEADING}</h1>
  </>
);
export default Home;
