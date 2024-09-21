import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Logger from './utils/Logger.js';
import bodyParser from 'body-parser';
import FriendZoneUserRoutes from './routes/usersRoutes.js';

// Initialize environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200
};


//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));



// Basic route
app.get('/api', (req, res) => {
  res.send('Hello from the backend!');
});

// routes
app.use('/api', FriendZoneUserRoutes);

// Start the server
app.listen(PORT, () => {
  Logger.info(`Server running on port ${PORT}`);
});
