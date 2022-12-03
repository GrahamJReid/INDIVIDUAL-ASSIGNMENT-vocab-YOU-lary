import renderToDOM from '../utils/renderToDOM';

let vocString = '';
const selectVocabz = (vocabExtract) => {
  vocString += `<a class="dropdown-item" id="newLanguage">${vocabExtract}</a>`;
  renderToDOM('#newLanguage', vocString);
};

export default selectVocabz;
