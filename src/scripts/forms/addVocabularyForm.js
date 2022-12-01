import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';
// import selectVocabulary from './selectVocab';

const addVocabularyForm = (obj = {}) => {
  console.warn(obj);
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-Vocabulary--${obj.firebaseKey}` : 'submit-Vocabulary'}" class="mb-4">
      <div class="form-group">
        <label for="title"></label>
        <input type="text" class="form-control" id="title" aria-describedby="bookTitle" placeholder="Enter Term Here" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="description"></label>
        <textarea class="form-control" placeholder="Enter Definition Here" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
        </div>
        <div class="dropdown">
        <button class=" logout-btn btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Select Language
        </button>
        <div id="languageDropDown"  class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" id="languageOne">HTML</a>
          <a class="dropdown-item" id="languageTwo">CSS</a>
          <a class="dropdown-item" id="languageThree">JAVASCRIPT</a>
          
        </div>
      </div>
      </div>
      </div>

      <div class="form-group">
      <label for="description"></label>
      <textarea class="form-control" placeholder="Add Language" id="languageDropDownOutput" style="height: 100px"></textarea>
    </div>

   
      <button type="submit" class=" logout-btn btn btn-primary">Submit Vocabulary
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
  // selectVocabulary(`${obj.uid || ''}`);
};

export default addVocabularyForm;
