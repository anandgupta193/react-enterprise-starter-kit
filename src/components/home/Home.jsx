import React from 'react';
import HomeStyles from './Home.scss';
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
import CloudsImage from '../../assets/images/wavesOpacity.svg';

const Home = () => (
  <>
    <img alt="Clouds" src={CloudsImage} />
    <span className={HomeStyles.forkonGithub}>
      <a href={REPO_URL}>{GITHUB_FORK_TEXT}</a>
    </span>
    <div className={HomeStyles.app}>
      <img className={HomeStyles.logo} alt={IMG_ALT} src={ReactLogo} />
      <h1 className={HomeStyles.heading}>{WELCOME_HEADING}</h1>
      <div className={HomeStyles.badges}>
        <img alt="License Badges" src={LICENCE_BADGE} />
        <img alt="Stars Badges" src={FORK_BADGE} />
        <img alt="Forks Badges" src={STARS_BADGE} />
      </div>
    </div>
  </>
);
export default Home;
