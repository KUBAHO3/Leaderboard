import _ from 'lodash';
import './style.css';

const leaderboard_data = [
  {name: 'Name', score: 100},
  {name: 'Name', score: 30},
  {name: 'Name', score: 25},
  {name: 'Name', score: 87},
  {name: 'Name', score: 57},
  {name: 'Name', score: 10},
]

let tbody = document.querySelector('.table-body');
let leaderboard = leaderboard_data.map(data => `
  <tr>
    <td scope="row">${data.name}:</td>
    <td>${data.score}</td>
  </tr>
`).join('');

tbody.innerHTML = leaderboard