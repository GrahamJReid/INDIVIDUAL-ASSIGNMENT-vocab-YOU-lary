import { getVocabulary } from '../../api/vocabularyData';
import addVocabularyForm from '../forms/addVocabularyForm';
import showVocab from '../pages/vocabulary';

const navigationEvents = (user) => {
  document.querySelector('#all-Vocabulary').addEventListener('click', () => {
    console.warn('is this work now');
    getVocabulary(user.uid).then(showVocab);
  });
  document.querySelector('#create-Vocabulary').addEventListener('click', () => {
    console.warn('createcreatecrtraeteee');
    addVocabularyForm(user);
  });
};

export default navigationEvents;
