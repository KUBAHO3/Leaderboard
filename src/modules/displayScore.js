import myScore from './myscore.js';

const displayScore = async (tbody, url) => {
  const leaderboardData = await myScore(url);
  tbody.innerHTML = '';
  leaderboardData.result.forEach((data) => {
    const scoreItems = ` <tr class="text-success">
    <td scope="row">${data.user}:</td>
         <td>${data.score}</td>
    </tr>`;
    tbody.innerHTML += scoreItems;
  });
};
export default displayScore;