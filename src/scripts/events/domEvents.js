import { deleteVocabulary, getSingleVocabulary, getVocabulary } from '../../api/vocabularyData';
import addVocabularyForm from '../forms/addVocabularyForm';
import showVocab from '../pages/vocabulary';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('create-Vocabulary')) {
      console.warn('this is the create vibe');
      addVocabularyForm(user);
    }
    if (e.target.id.includes('delete-Vocabulary-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE VOCABULARY', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');
        deleteVocabulary(firebaseKey).then(() => {
          getVocabulary(user.uid).then(showVocab);
        });
      }
    }
    if (e.target.id.includes('edit-Vocabulary-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocabulary(firebaseKey).then((bookObj) => addVocabularyForm(bookObj));
      // getSingleBook(firebaseKey).then(addBookForm); // using the callback method
    }
  });
};
export default domEvents;
