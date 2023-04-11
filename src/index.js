import './style.css';

const leaderboardData = [
  { name: 'Name', score: 100 },
  { name: 'Name', score: 30 },
  { name: 'Name', score: 25 },
  { name: 'Name', score: 87 },
  { name: 'Name', score: 57 },
  { name: 'Name', score: 10 },
];

const tbody = document.querySelector('.table-body');
const leaderboard = leaderboardData.map((data) => `
  <tr>
    <td scope="row">${data.name}:</td>
    <td>${data.score}</td>
  </tr>
`).join('');

tbody.innerHTML = leaderboard;