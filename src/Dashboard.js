import React, { useState, useEffect } from 'react';
import './assets/Dashboard.css'; // Updated import path

const quotesList = [
  "“I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion.” – Muhammad Ali",
  "“We are what we repeatedly do. Excellence then is not an act but a habit.” –Aristotele",
  "“The body achieves what the mind believes.” – Napoleon Hill",
  "“The hard days are the best because that’s when champions are made, so if you push through, you can push through anything.” – Dana Vollmer",
  "“The best way to predict the future is to create it.” – Abraham Lincoln",
  "“The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.” – Steve Jobs",
  "“If you can dream it, you can do it.” – Walt Disney",
  "“Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.” – Steve Jobs",
  "“If you don’t find the time, if you don’t do the work, you don’t get the results.” – Arnold Schwarzenegger",
  "“Push harder than yesterday if you want a different tomorrow.” – Vincent Williams Sr.",
  "“The real workout starts when you want to stop.” – Ronnie Coleman",
  "“Take care of your body. It’s the only place you have to live.” — Jim Rohn",
  "“I’ve failed over and over again in my life and that is why I succeed.” – Michael Jordan",
  "“Once you are exercising regularly, the hardest thing is to stop it.” – Erin Gray",
  "“The secret of getting ahead is getting started.” — Mark Twain",
  "“Exercise should be regarded as tribute to the heart” – Gene Tunney",
  "“You’re going to have to let it hurt. Let it suck. The harder you work, the better you will look. Your appearance isn’t parallel to how heavy you lift, it’s parallel to how hard you work.” –Joe Mangianello",
  "“Most people fail, not because of lack of desire, but, because of lack of commitment.” –Vince Lombardi",
  "“You miss one hundred percent of the shots you don’t take.” – Wayne Gretzky",
  "“If something stands between you and your success, move it. Never be denied.” – Dwayne “The Rock” Johnson",
  "“All progress takes place outside the comfort zone.”– Michael John Bobak",
  "“Just believe in yourself. Even if you don’t, just pretend that you do and at some point, you will.” – Venus Williams",
  ];

const getRandomQuotes = (arr, num) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

const Dashboard = () => {
  const [kcal, setKcal] = useState(0);
  const [steps, setSteps] = useState(0);
  const [distance, setDistance] = useState(0);
  const [caloriesBurned, setCaloriesBurned] = useState(0);
  const [workouts, setWorkouts] = useState({
    Monday: 'Cardio',
    Tuesday: 'Strength Training',
    Wednesday: 'Yoga',
    Thursday: 'Pilates',
    Friday: 'Rest Day',
    Saturday: 'HIIT',
    Sunday: 'Running'
  });
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    setQuotes(getRandomQuotes(quotesList, 2));
  }, []);

  const handleKcalChange = (e) => {
    setKcal(e.target.value);
  };

  const handleStepsChange = (e) => {
    const steps = e.target.value;
    setSteps(steps);
    setDistance((steps * 0.0008).toFixed(2)); // 1 step ≈ 0.0008 km
    setCaloriesBurned((steps * 0.04).toFixed(2)); // 1 step ≈ 0.04 kcal
  };

  const handleWorkoutChange = (day, event) => {
    setWorkouts({
      ...workouts,
      [day]: event.target.value
    });
  };

  return (
    <div className="dashboard">
      <div className="section-container">
        <div className="calories-section">
          <label htmlFor="calories-slider">Calories Consumed: {kcal} kcal</label>
          <input
            type="range"
            id="calories-slider"
            min="0"
            max="3000"
            value={kcal}
            onChange={handleKcalChange}
          />
        </div>
      </div>

      <div className="section-container">
        <div className="activity-summary">
          <h2>Daily Activity Summary</h2>
          <div>
            <label>Steps:</label>
            <input
              type="number"
              value={steps}
              onChange={handleStepsChange}
            />
          </div>
          <div>
            <label>Distance: {distance} km</label>
          </div>
          <div>
            <label>Calories Burned: {caloriesBurned} kcal</label>
          </div>
        </div>
      </div>

      <div className="section-container">
        <div className="workout-planner">
          <h2>Workout Planner</h2>
          <ul>
            {Object.keys(workouts).map(day => (
              <li key={day}>
                <label>{day}:</label>
                <input
                  type="text"
                  value={workouts[day]}
                  onChange={(e) => handleWorkoutChange(day, e)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="quotes-section">
        <div className="quote-container">
          <p>{quotes[0]}</p>
        </div>
        <div className="quote-container">
          <p>{quotes[1]}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
