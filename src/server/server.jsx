/* eslint-disable no-console */
import React from 'react';
import path from 'path';
import fs from 'fs';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import store from '../redux/store';
// import rootSagas from '../sagas';
import App from '../components/App';

const server = express();

server.get('/', (req, res) => {
  console.log('Middle Ware Called');
  console.log(path.resolve('./dist/index.html'));
  const data = fs.readFileSync(path.resolve('./dist/index.html'), 'utf8');
  const content = renderToString(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  const preloadedState = `<script type="text/javascript" charset="utf-8"> window.__PRELOADED__STATE__ = ${JSON.stringify(store)} </script>`;
  const serverRenderedHTML = data.replace(
    '<div id="root"></div>',
    `<div id="root">${content}</div>${preloadedState}`,
  );

  res.status(200).send(serverRenderedHTML);
  // store.runSaga(rootSagas).toPromise()
  //   .then(() => {
  //     console.log('Saga Run Successfully');
  //     // res.status(200).send(serverRenderedHTML);
  //   })
  //   .catch((e) => {
  //     console.log('Saga Run Failed', e.message);
  //     // res.status(500).send(e.message);
  //   });
});

// serving compressed version if production mode
if (!__DEVELOPMENT__) {
  const encodeResToGzip = (contentType) => (req, res, next) => {
    req.url += '.gz';
    console.log(req.url);
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', contentType);
    console.log(`Serving gzipped JS, ${req.url}`);
    next();
  };
  server.get('*.js', encodeResToGzip('text/javascript'));
  server.get('*.css', encodeResToGzip('text/css'));
}

server.use(express.static('./dist'));

server.listen(3000, () => {
  console.log(`SSR running on port ${3000}`);
});
