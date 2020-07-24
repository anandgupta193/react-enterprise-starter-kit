import React from 'react';
import HomeStyle from './Home.scss';
import {
  WELCOME_HEADING,
  IMG_ALT,
  REPO_URL,
  GITHUB_FORK_TEXT,
  LICENCE_BADGE,
  FORK_BADGE,
  STARS_BADGE,
} from '../../constants/HomeConstants';
import ReactLogo from '../../assets/images/React.webp';
import clouds from '../../assets/images/wavesOpacity.svg';

const Home = () => (
  <>
    <img alt="Clouds" src={clouds} />
    <span className={HomeStyle.forkonGithub}>
      <a href={REPO_URL}>{GITHUB_FORK_TEXT}</a>
    </span>
    <img className={HomeStyle.logo} alt={IMG_ALT} src={ReactLogo} />
    <h1 className={HomeStyle.heading}>{WELCOME_HEADING}</h1>
    <div className={HomeStyle.badges}>
      <img alt="License Badges" src={LICENCE_BADGE} />
      <img alt="Stars Badges" src={FORK_BADGE} />
      <img alt="Forks Badges" src={STARS_BADGE} />
    </div>
  </>
);
export default Home;
