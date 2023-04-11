import './style.css';
import Score from './modules/getScore';


const Form = document.querySelector('form');
const refresh = document.querySelector('#refresh');

const score = new Score();
score.render();

refresh.addEventListener('click', () => {
  window.location.reload();
});

