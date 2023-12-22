import Quiz from '../models/quizModel.js';

// createQuiz
export async function createQuiz(req, res) {
    try {
        const { question, options, rightAnswer, startDate, endDate } = req.body;

        // Validate required fields
        if (!question || !options || !startDate || !endDate) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        // Create a new quiz
        const quiz = new Quiz({
            question,
            options,
            rightAnswer,
            startDate: new Date(startDate),
            endDate: new Date(endDate),
        });

        // Save the quiz to the database
        await quiz.save();

        res.status(201).json({ message: 'Quiz created successfully', quizId: quiz._id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// getAllQuizzes
export async function getAllQuizzes(req, res) {
    try {
        const quizzes = await Quiz.find();
        res.status(200).json({ quizzes });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

//getActiveQuiz
export async function getActiveQuiz(req, res) {
    try {
        const now = new Date();
        console.log(now);
        const activeQuiz = await Quiz.findOne({
            startDate: { $lt: now },
            endDate: { $gt: now },
        });

        if (!activeQuiz) {
            return res.status(404).json({ message: 'No active quiz found.' });
        }

        res.status(200).json({ quiz: activeQuiz, status: 'Active' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

//getQuizResult
export async function getQuizResult(req, res) {
    try {
        const quizId = req.params.id;
        const quiz = await Quiz.findById(quizId);

        if (!quiz) {
            return res.status(404).json({ message: 'Quiz not found.' });
        }

        //const now = new Date();
        const now = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
        //console.log(now); 

        const quizEndTime = quiz.endDate.getTime();
        const fiveMinutesAfterEnd = new Date(quizEndTime + 5 * 60 * 1000);

        if (now < fiveMinutesAfterEnd) {
            return res.status(400).json({ message: 'Quiz result not available yet.' });
        }

        // Assuming you have a result field in your Quiz model
        const result = {
            correctAnswer: quiz.options[quiz.rightAnswer],
            additionalInfo: 'Add any other result-related information here.',
        };

        res.status(200).json({ result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
