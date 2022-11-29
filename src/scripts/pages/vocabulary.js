import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const showVocab = (array) => {
  clearDom();
  let domString = `<div>
  <button id="javascript">Javascript</button>
  <button>HTML</button>
  <button>CSS</button>
  </div>`;

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

export default showVocab;

// test
