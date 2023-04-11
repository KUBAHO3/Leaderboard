import displayScore from './displayScore.js';

class Score {
  constructor() {
    this.tbody = document.querySelector('.table-body');
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/heavengame/scores/';
  }

  render = () => {
    displayScore(this.tbody, this.url);
  };
}
export default Score;