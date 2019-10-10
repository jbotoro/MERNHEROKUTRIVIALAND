import React from 'react';

import '../../css/pre_post_game.css';

const UserStatsDisplay = ({user}) => {
  
  let percentageRight = Math.floor(user.questionsCorrect / 
    user.questionsAnswered);
  
  return (
  <div>
    {
      (!user)
       ? 
      <div> Loading </div>
       : 
      <div>
        <ul className="players-stats-list">
          <li>
            <span>Total Games Played:</span>
            <span>{user.gamesPlayed}</span>
          </li>
          <li>
            <span>Questions Correct:</span>
            <span>{user.questionsCorrect}</span>
          </li>
          <li>
            <span>Percentage Correct:</span>
            <span>{percentageRight} %</span>
          </li>
          <li>
            <span>Avg Round One Score: </span>
            <span>{user.averageRoundOne}</span>
          </li>
          <li>
            <span>Avg Round Two Score:  </span>
            <span>{user.averageRoundTwo}</span>
          </li>
          <li>
            <span>Avg Points Per Game:</span>
            <span>{user.pointsPerGame}</span>
          </li>
        </ul>
      </div>
    }
  </div>
  )};


export default UserStatsDisplay;