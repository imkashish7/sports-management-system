document.addEventListener('DOMContentLoaded', function() {
    // Sample schedule data
    const scheduleData = [
       {date: '12/10', time: '8:00 PM', location: 'Stadium A'},
       {date: '12/12', time: '6:00 PM', location: 'Stadium B'},
       // Add more games...
    ];
   
    // Sample player stats data
    const playerStatsData = [
       {name: 'Player A', position: 'Forward', score: 10},
       {name: 'Player B', position: 'Defense', score: 8},
       // Add more players...
    ];
   
    // Sample scoreboard data
    const scoreboardData = {
       teamA: 120,
       teamB: 90
    };
   
    // Render schedule data
    const schedule = document.getElementById('schedule');
    scheduleData.forEach(game => {
       const gameElement = document.createElement('div');
       gameElement.innerHTML = `
         <p><strong>Date:</strong> ${game.date}</p>
         <p><strong>Time:</strong> ${game.time}</p>
         <p><strong>Location:</strong> ${game.location}</p>
       `;
       schedule.appendChild(gameElement);
    });
   
    // Render player stats data
    const playerStats = document.getElementById('playerStats');
    playerStatsData.forEach(player => {
       const playerElement = document.createElement('div');
       playerElement.innerHTML = `
         <p><strong>Name:</strong> ${player.name}</p>
         <p><strong>Position:</strong> ${player.position}</p>
         <p><strong>Score:</strong> ${player.score}</p>
       `;
       playerStats.appendChild(playerElement);
    });
   
    // Render scoreboard data
    const scoreboard = document.getElementById('scoreboard');
    scoreboard.innerHTML = `
       <p><strong>Team A:</strong> ${scoreboardData.teamA}</p>
       <p><strong>Team B:</strong> ${scoreboardData.teamB}</p>
    `;
   });