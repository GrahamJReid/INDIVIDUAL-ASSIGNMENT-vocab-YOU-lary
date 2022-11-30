import { createVocabulary, getVocabulary, updateVocabulary } from '../../api/vocabularyData';
import { showVocab } from '../pages/vocabulary';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submit-Vocabulary')) {
      // console.warn('CLICKED SUBMIT BOOK', e.target.id);
      const currentdate = new Date();
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language').value.toUpperCase(),
        uid: `${user.uid}`,
        time: `${currentdate.getDate()}/${
          currentdate.getMonth() + 1}/${
          currentdate.getFullYear()} @ ${
          currentdate.getHours()}:${
          currentdate.getMinutes()}:${
          currentdate.getSeconds()}`,
      };
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
        language: document.querySelector('#language').value,
        uid: `${user.uid}`,
        firebaseKey
      };
      updateVocabulary(payload).then(() => {
        getVocabulary(user.uid).then(showVocab);
      });
    }
  });
};

export default formEvents;
