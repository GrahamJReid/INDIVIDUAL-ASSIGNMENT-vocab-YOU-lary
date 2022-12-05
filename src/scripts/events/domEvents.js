import {
  cssLanguage,
  deleteVocabulary, getSingleVocabulary, getVocabulary, htmlLanguage, javascriptLanguage
} from '../../api/vocabularyData';
import addVocabularyForm from '../forms/addVocabularyForm';
import { showVocab, showVocabArr } from '../pages/vocabulary';
import renderToDOM from '../utils/renderToDOM';

// import { vocabPay } from './formEvents';

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
    if (e.target.id === 'old') {
      const sortedProjectNames = showVocabArr.sort((a, b) => a.time.localeCompare(b.time));

      showVocab(sortedProjectNames);
    }
    if (e.target.id === 'new') {
      const sortedProjectNames = showVocabArr.sort((b, a) => a.time.localeCompare(b.time));

      showVocab(sortedProjectNames);
    }
    if (e.target.id === 'alpha') {
      const sortedProjectNames = showVocabArr.sort((a, b) => a.title.localeCompare(b.title));

      showVocab(sortedProjectNames);
    }
    if (e.target.id.includes('languageOne')) {
      console.warn('this is the htmlLanguage vibe');
      const languageString = 'HTML';
      renderToDOM('#languageDropDownOutput', languageString);
    }
    if (e.target.id.includes('languageTwo')) {
      console.warn('this is the htmlLanguage vibe');
      const languageString = 'CSS';
      renderToDOM('#languageDropDownOutput', languageString);
    }
    if (e.target.id.includes('languageThree')) {
      console.warn('this is the htmlLanguage vibe');
      const languageString = 'JAVASCRIPT';
      renderToDOM('#languageDropDownOutput', languageString);
    }

    // if (e.target.id.includes('newLanguage')) {
    //   console.warn('this is the newLanguage');
    //   const languageString = vocabPay;
    //   renderToDOM('#languageDropDownOutput', languageString);
    // }
  });
};
export default domEvents;
