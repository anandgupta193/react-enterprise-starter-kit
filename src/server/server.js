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
        <div id="mountNode">Hello there</div>
        <script src="/app.js"></script>
      </body>
    </html>
  `);
});

server.listen(4242);
