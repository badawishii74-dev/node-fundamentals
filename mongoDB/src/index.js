const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const globalError = require('./middlewares/errorMiddleware');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);


app.use(globalError);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
