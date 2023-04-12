import './style.css';
import Score from './modules/getScore.js';
import postScore from './modules/postScore.js';

const Form = document.querySelector('form');
const refresh = document.querySelector('#refresh');

const score = new Score();
score.render();

refresh.addEventListener('click', () => {
  window.location.reload();
});
Form.addEventListener('submit', (e) => {
  e.preventDefault();
  postScore(score.url, score.render);
});
