import addVocabularyForm from '../forms/addVocabularyForm';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('create-Vocabulary')) {
      console.warn('this is the create vibe');
      addVocabularyForm(user);
    }
  });
};
export default domEvents;
