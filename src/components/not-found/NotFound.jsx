import React from 'react';

import { ERROR_CODE, ERROR_TEXT } from '../../constants/404Constants';

const NotFound = () => (
  <>
    <h1>{ERROR_CODE}</h1>
    <h4>{ERROR_TEXT}</h4>
  </>
);

export default NotFound;
