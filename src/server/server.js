import express from 'express';

const server = express();
server.use(express.static('dist'));

server.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>React Starter-Kit</title>
      </head>
      <body>
        <div id="root">React will bootstrap here..</div>
        <script src="/app.js"></script>
      </body>
    </html>
  `);
});

// eslint-disable-next-line no-console
server.listen(3000, () => { console.log('Server Started om Port 3000!!!'); });
