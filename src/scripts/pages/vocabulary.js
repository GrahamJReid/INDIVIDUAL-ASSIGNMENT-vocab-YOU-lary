import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

// eslint-disable-next-line import/no-mutable-exports
let showVocabArr = [];
const showBooksClear = () => {
  showVocabArr = [];
};
const showVocab = (array) => {
  clearDom();
  showBooksClear();
  array.forEach((item) => showVocabArr.push(item));
  let domString = `
  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   Language/Tech
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" id="html">HTML</a>
    <a class="dropdown-item" id="css">CSS</a>
    <a class="dropdown-item" id="javascript">JAVASCRIPT</a>
  </div>
</div>
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   Sort
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" id="old">Oldest to Newest</a>
    <a class="dropdown-item" id="new">Newest to Oldest</a>
    <a class="dropdown-item" id="alpha">Alphabetically</a>
  </div>
</div>
`;

  array.forEach((item) => {
    domString += `
      <div class="card">
  
        <div class="card-body" style="height: 300px;">
          <h5 class="card-title">${item.title}</h5>
          <p>${item.definition}</p>
          <p>${item.language}</p>
        <p>${item.time}</p>
      
          <i id="delete-Vocabulary-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"> Delete</i>
          <i id="edit-Vocabulary-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info">Edit</i>
        </div>
      </div>`;
  });
  renderToDOM('#store', domString);
};

export { showVocab, showVocabArr };

// test
