import { getVocabulary } from '../../api/vocabularyData';
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
    console.warn(searchResult);
    searchedVocabOnDom(searchResult);
  });
};
export default navigationEvents;
