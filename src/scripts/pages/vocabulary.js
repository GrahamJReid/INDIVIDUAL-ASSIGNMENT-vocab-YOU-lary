import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const showVocab = (array) => {
  clearDom();
  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card">
  
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.title}</h5>
          <p>${item.definition}</p>
        
      
          <i id="delete-Vocabulary-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"> Delete</i>
        </div>
      </div>`;
  });
  renderToDOM('#store', domString);
};

export default showVocab;

// test
