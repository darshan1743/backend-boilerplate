const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
https://frontend-reat-dev.vercel.app/

app.use(cors({
  origin: 'https://frontend-reat-dev.vercel.app/',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  credentials: true
}));
app.use(express.json());

app.use('/api/users', require('./routes/userRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
