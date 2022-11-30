import { getVocabulary } from '../../api/vocabularyData';
import renderToDOM from '../utils/renderToDOM';

const selectVocabulary = (uid) => {
  console.warn(uid);
  let domString = `<label for="author">Select a language</label>
    <select class="form-control" id="author_id" >
    <option value="">Select a Language</option>`;

  getVocabulary(uid).then((authorsArray) => {
    if (authorsArray.indexOf('CSS') === -1) { authorsArray.push('CSS'); }
    authorsArray.forEach((author) => {
      console.warn(author);
      domString += `
          <option 
            value="${author.firebaseKey}" 
            ${uid === author.firebaseKey ? 'selected' : ''}>
              ${author.language}
          </option>`;
    });

    domString += '</select>';

    renderToDOM('#select-author', domString);
  });
};

export default selectVocabulary;
// tes
