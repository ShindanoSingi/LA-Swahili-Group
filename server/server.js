const express = require('express');
require('dotenv').config({ path: '../.env' });
const cors = require('cors');
const app = express();
const dbConfig = require('./config/dbconfig');
const PORT = process.env.PORT || 8080;

// Connect to MongoDB
const usersRouter = require('./routes/usersRoutes');

app.use(cors());

app.use(express.json());

const server = require('http').createServer(app);

app.use('/api/users', usersRouter);

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));