import { createVocabulary, getVocabulary, updateVocabulary } from '../../api/vocabularyData';
// import selectVocabz from '../forms/selectVocab';
import { showVocab } from '../pages/vocabulary';

// eslint-disable-next-line import/no-mutable-exports

// eslint-disable-next-line no-multiple-empty-lines

// eslint-disable-next-line import/no-mutable-exports
let vocabPay = '';
const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submit-Vocabulary')) {
      // console.warn('CLICKED SUBMIT BOOK', e.target.id);
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#languageDropDownOutput').value,
        uid: user.uid,
        time: new Date().toLocaleString()
      };
      vocabPay += payload.language;

      // selectVocabz(payload.language);

      createVocabulary(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocabulary(patchPayload).then(() => {
          getVocabulary(user.uid).then(showVocab);
        });
      });
    }
    if (e.target.id.includes('update-Vocabulary')) {
      const [, firebaseKey] = e.target.id.split('--');
      // console.warn('CLICKED UPDATE BOOK', e.target.id);

      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#languageDropDownOutput').value,
        uid: `${user.uid}`,
        firebaseKey
      };
      updateVocabulary(payload).then(() => {
        getVocabulary(user.uid).then(showVocab);
      });
    }
  });
};

export { formEvents, vocabPay };
