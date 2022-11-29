import { javascriptLanguage } from '../../api/vocabularyData';
import showVocab from '../pages/vocabulary';

const languageFilterEvents = (user) => {
  document.querySelector('#javascript').addEventListener('click', () => {
    console.warn('this is for the language filter');
    javascriptLanguage(user.uid).then(showVocab);
  });
};

export default languageFilterEvents;
