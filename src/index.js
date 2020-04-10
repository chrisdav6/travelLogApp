const express = require('express');
const app = express();
const port = process.env.PORT || 1337;
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const middlewares = require('./middlewares');
const mongoose = require('mongoose');
require('dotenv').config();
const logs = require('./api/log');

//Connect to DB
mongoose.connect(
  process.env.DATABASE_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => console.log('Connected to DB')
);

//Use Morgan Logger
app.use(morgan('common'));

//Use Helmet
app.use(helmet());

//Use CORS
app.use(
  cors({
    origin: process.env.CORS_ORIGIN
  })
);

//Use Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Mount Routes
app.use('/api/logs', logs);

//Error Handling
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

//Start Server
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
