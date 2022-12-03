import { getVocabulary } from '../../api/vocabularyData';
import renderToDOM from '../utils/renderToDOM';

const selectVocabulary = (uid) => {
  let domString = '';
  getVocabulary(uid).then((authorsArray) => {
    authorsArray.forEach((author) => {
      console.warn(author);
      domString += `
          
      <a class="dropdown-item" id="newLanguage">${author.language}</a>
              
          `;
    });

    domString += '</select>';

    renderToDOM('#newLanguage', domString);
  });
};

export default selectVocabulary;
