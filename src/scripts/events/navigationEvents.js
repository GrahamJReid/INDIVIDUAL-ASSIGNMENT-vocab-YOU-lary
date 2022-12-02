import {
  cssLanguage, getVocabulary, htmlLanguage, javascriptLanguage
} from '../../api/vocabularyData';
import addVocabularyForm from '../forms/addVocabularyForm';
import { searchedVocabOnDom, showVocab, showVocabArr } from '../pages/vocabulary';

const navigationEvents = (user) => {
  document.querySelector('#all-Vocabulary').addEventListener('click', () => {
    console.warn('is this work now');
    getVocabulary(user.uid).then(showVocab);
  });
  document.querySelector('#create-Vocabulary').addEventListener('click', () => {
    console.warn('createcreatecrtraeteee');
    addVocabularyForm(user);
  });
  document.querySelector('#search').addEventListener('keyup', (e) => {
    e.preventDefault();
    const searchValue = document.querySelector('#search').value.toLowerCase();
    console.warn(searchValue);
    // eslint-disable-next-line arrow-parens
    const searchResult = showVocabArr.filter(taco => taco.title.toLowerCase().includes(searchValue));
    // eslint-disable-next-line arrow-parens
    const searchResult2 = showVocabArr.filter(taco => taco.language.toLowerCase().includes(searchValue));
    console.warn(searchResult, searchResult2);
    searchedVocabOnDom(searchResult, searchResult2);
  });
};
const filterEvents = (user) => {
  document.querySelector('#targetFilters').addEventListener('click', (e) => {
    if (e.target.id.includes('javascript')) {
      console.warn('this is the javascriptvibe');
      javascriptLanguage(user.uid).then(showVocab);
    }
    if (e.target.id.includes('css')) {
      console.warn('this is the javascriptvibe');
      cssLanguage(user.uid).then(showVocab);
    }
    if (e.target.id.includes('html')) {
      console.warn('this is the javascriptvibe');
      htmlLanguage(user.uid).then(showVocab);
    }
  });
};
const sortEvents = () => {
  document.querySelector('#targetSort').addEventListener('click', (e) => {
    if (e.target.id === 'new') {
      const sortedProjectNames = showVocabArr.sort((a, b) => b.time.localeCompare(a.time));

      showVocab(sortedProjectNames);
    }
    if (e.target.id === 'old') {
      const sortedProjectNames = showVocabArr.sort((a, b) => a.time.localeCompare(b.time));

      showVocab(sortedProjectNames);
    }
    if (e.target.id === 'alpha') {
      const sortedProjectNames = showVocabArr.sort((a, b) => a.title.localeCompare(b.title));

      showVocab(sortedProjectNames);
    }
  });
};
export { navigationEvents, filterEvents, sortEvents };
