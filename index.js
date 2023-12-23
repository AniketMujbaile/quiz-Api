import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import connectDB from './config/db.js'
import bodyParser from 'body-parser'
import quizRoutes from './routes/quizRoutes.js'
import userRoutes from './routes/userRoutes.js'
import updateQuizStatusJob from './cronJobs.js'
import cors from 'cors'

const app = express()
 
// Middleware
app.use(bodyParser.json());

app.use(express.json())

// CORS Policy
app.use(cors())

const DATABASE_URL = process.env.DATABASE_URL
// Database Connection
connectDB(DATABASE_URL)

// Routes
app.use('/', userRoutes);
app.use('/api/user', quizRoutes)
app.use('/api/user', userRoutes)

updateQuizStatusJob.start();

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
