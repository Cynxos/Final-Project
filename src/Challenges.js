import React from 'react';
import './assets/Challenges.css';

const challenges = [
  {
    level: 'Beginner',
    tasks: [
      { description: 'Daily Step Goal: Take 5,000 steps in a day.', points: 10 },
      { description: 'Water Intake: Drink 8 cups of water in a day.', points: 10 },
      { description: 'Healthy Meal: Eat at least one balanced meal with vegetables, protein, and whole grains.', points: 10 },
      { description: 'Active Break: Take a 5-minute stretch break every hour during your workday.', points: 10 }
    ]
  },
  {
    level: 'Intermediate',
    tasks: [
      { description: 'Consistent Step Goal: Take 10,000 steps daily for a week.', points: 20 },
      { description: 'Home Workout: Complete a 30-minute home workout.', points: 20 },
      { description: 'Vegetarian Day: Have an entire day without meat.', points: 20 },
      { description: 'Sleep Challenge: Get at least 7 hours of sleep for three consecutive nights.', points: 20 }
    ]
  },
  {
    level: 'Advanced',
    tasks: [
      { description: 'Long Run: Run or jog for 5 kilometers without stopping.', points: 30 },
      { description: 'Fitness Class: Attend a fitness class (e.g., yoga, pilates, spinning).', points: 30 },
      { description: 'Healthy Week: Eat balanced meals every day for a week, without any processed foods.', points: 30 },
      { description: 'Strength Training: Complete a full-body strength training workout.', points: 30 }
    ]
  },
  {
    level: 'Expert',
    tasks: [
      { description: 'Consistent Workout: Work out 5 times a week for a month.', points: 50 },
      { description: 'Long Distance: Run a half-marathon (21 kilometers).', points: 50 },
      { description: 'Advanced Meal Prep: Meal prep all your meals for a week, focusing on balanced nutrition.', points: 50 },
      { description: 'Mindfulness: Meditate for 15 minutes daily for a month.', points: 50 }
    ]
  },
  {
    level: 'Ultimate',
    tasks: [
      { description: 'Marathon: Complete a full marathon (42 kilometers).', points: 100 },
      { description: 'Triathlon: Complete a sprint triathlon.', points: 100 },
      { description: 'Body Transformation: Achieve a specific fitness goal, such as losing a certain amount of weight or gaining muscle mass over a period of 6 months.', points: 100 },
      { description: 'Wellness Retreat: Attend a week-long wellness retreat focused on fitness and mental well-being.', points: 100 }
    ]
  }
];

const userPoints = 320; // Placeholder for user points, you can dynamically calculate this based on completed tasks

const Challenges = () => {
  return (
    <div className="challenges-page">
      <div className="challenges-container">
        <div className="challenges">
          {/* <h1>Challenges</h1> */}
          {challenges.map((category) => (
            <div key={category.level} className="challenge-category">
              <h2>{category.level} Challenges</h2>
              <ul>
                {category.tasks.map((task, index) => (
                  <li key={index} className="challenge-item">
                    <span>{task.description}</span>
                    <span className="points">{task.points} points</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="leaderboard">
          <h2>Leaderboard</h2>
          <p>Points Accrued: {userPoints}</p>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
