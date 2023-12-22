 
import express from 'express';
import {
  createQuiz,
  getAllQuizzes,
  getActiveQuiz,
  getQuizResult,
} from '../controllers/quizController.js';
import checkUserAuth from '../middlewares/auth-middleware.js';

const router = express.Router();

// POST /quizzes - Create a new quiz
router.post('/quizzes', checkUserAuth, createQuiz);

// GET /quizzes/active - Get the active quiz
router.get('/quizzes/active', checkUserAuth, getActiveQuiz);

// GET /quizzes/:id/result - Get quiz result by ID
router.get('/quizzes/:id/result', checkUserAuth, getQuizResult);

// GET /quizzes/all - Get all quizzes
router.get('/quizzes/all', checkUserAuth, getAllQuizzes);

export default router;

 
 