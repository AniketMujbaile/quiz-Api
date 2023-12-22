import cron from 'node-cron'
import Quiz from './models/quizModel.js'  

// Define a cron job to update quiz statuses
const updateQuizStatusJob = cron.schedule('*/5 * * * *', async () => {
 
  try {
    const now = new Date();
    await Quiz.updateMany(
      { endDate: { $lt: now }, status: 'Active' },
      { $set: { status: 'Finished' } }
    );
    console.log('Quiz statuses updated.');
  } catch (error) {
    console.error('Error updating quiz statuses:', error);
  }
}, {
  scheduled: false, // Set to true to start the job immediately
  timezone: 'Asia/Kolkata', 
});

export default updateQuizStatusJob
 