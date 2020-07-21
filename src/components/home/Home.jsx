import React from 'react';
import HomeStyle from './Home.scss';
import {
  WELCOME_HEADING,
  IMG_ALT,
  REPO_URL,
  GITHUB_FORK_TEXT,
} from '../../constants/HomeConstants';
import ReactLogo from '../../assets/images/React.webp';

const Home = () => (
  <>
    <span className={HomeStyle.forkonGithub}>
      <a href={REPO_URL}>
        {GITHUB_FORK_TEXT}
      </a>
    </span>
    <img className={HomeStyle.logo} alt={IMG_ALT} src={ReactLogo} />
    <h1 className={HomeStyle.heading}>{WELCOME_HEADING}</h1>
  </>
);
export default Home;
