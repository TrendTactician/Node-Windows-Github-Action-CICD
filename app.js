// app.js
const express = require('express');
const app = express();

const APP_VERSION = process.env.APP_VERSION || 'v1.0.0';

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Node CI/CD app', version: APP_VERSION });
});

app.get('/version', (req, res) => {
  res.json({ version: APP_VERSION });
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: Date.now()
  });
});

app.post('/echo', (req, res) => {
  res.json({ youSent: req.body });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}, version ${APP_VERSION}`);
});

module.exports = app;
