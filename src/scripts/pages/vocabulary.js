/* eslint-disable no-restricted-syntax */
import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const searchedVocabOnDom = (arr, arr2) => {
  clearDom();
  let formCard = '';
  for (const item of arr) {
    formCard += `<div class="card">
  
  <div class="card-body" style="height: 300px;">
    <h5 class="card-title">Term: ${item.title}</h5>
    <p>Definition: ${item.definition}</p>
    <p>Language: ${item.language}</p>
  <p>${item.time}</p>

    <i id="delete-Vocabulary-btn--${item.firebaseKey}" class="logout-btn btn btn-danger fas"> Delete</i>
    <i id="edit-Vocabulary-btn--${item.firebaseKey}" class="logout-btn fas btn btn-info">Edit</i>
  </div>
</div>`;
  }
  for (const item of arr2) {
    formCard += `<div class="card">
  
  <div class="card-body" style="height: 300px;">
    <h5 class="card-title">Term: ${item.title}</h5>
    <p>Definition: ${item.definition}</p>
    <p>Language: ${item.language}</p>
  <p>${item.time}</p>

    <i id="delete-Vocabulary-btn--${item.firebaseKey}" class=" logout-btn btn btn-danger fas"> Delete</i>
    <i id="edit-Vocabulary-btn--${item.firebaseKey}" class=" logout-btn fas btn-info">Edit</i>
  </div>
</div>`;
  }
  renderToDOM('#store', formCard);
};

// eslint-disable-next-line import/no-mutable-exports
let showVocabArr = [];
const showBooksClear = () => {
  showVocabArr = [];
};
const showVocab = (array) => {
  clearDom();
  showBooksClear();
  array.forEach((item) => showVocabArr.push(item));
  let domString = '';
  array.forEach((item) => {
    domString += `<div class="card">
  
        <div class="card-body" style="height: 300px;">
          <h5 class="card-title">Term: ${item.title}</h5>
          <p>____________________________</p>
         <div class="definition"> <p>Definition: ${item.definition}</p></div>
          <p>Language: ${item.language}</p>
        <p>${item.time}</p>
      
          <i id="delete-Vocabulary-btn--${item.firebaseKey}" class="logout-btn btn btn-danger fas"> Delete</i>
          <i id="edit-Vocabulary-btn--${item.firebaseKey}" class="logout-btn fas  btn btn-info">Edit</i>
        </div>
      </div>`;
  });
  renderToDOM('#store', domString);
};

export { showVocab, showVocabArr, searchedVocabOnDom };

// test
