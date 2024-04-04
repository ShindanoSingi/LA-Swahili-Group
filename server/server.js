const express = require('express');
require('dotenv').config({ path: '../.env' });
const cors = require('cors');
const app = express();
const dbConfig = require('./config/dbconfig');
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');

// Connect to MongoDB
const usersRouter = require('./routes/usersRoutes');
const paymentsRoutes = require('./routes/paymentsRoutes');

app.use(cors());

// app.use(cors({
//     origin: 'http://localhost:3000/',
// }));

app.use(express.json());
app.use(bodyParser.json({
    limit: '100mb'
}));
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '10mb'
}));

const server = require('http').createServer(app);

app.use('/api/users', usersRouter);
app.use('/api/payments', paymentsRoutes);

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));