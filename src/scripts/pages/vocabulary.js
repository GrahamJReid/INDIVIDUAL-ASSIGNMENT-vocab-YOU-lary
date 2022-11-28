import renderToDOM from '../utils/renderToDOM';

const showVocab = (array) => {
  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card">
  
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.title}</h5>
          <p>${item.definition}</p>
        
      
    
        </div>
      </div>`;
  });
  renderToDOM('#store', domString);
};

export default showVocab;

// test
