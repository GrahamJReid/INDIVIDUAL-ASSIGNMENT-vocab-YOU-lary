import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const showVocab = (array) => {
  clearDom();
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

export default showVocab;

// test
