import renderToDOM from '../utils/renderToDOM';

const addVocabularyForm = (obj = {}) => {
  console.warn(obj);
  const domString = `
    <form id="${obj.firebaseKey ? `update-book--${obj.firebaseKey}` : 'submit-Vocabulary'}" class="mb-4">
      <div class="form-group">
        <label for="title">Book Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="bookTitle" placeholder="Enter Book Title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" placeholder="Book Description" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
      </div>
      <div class="form-group">
      <label for="description">Language</label>
      <textarea class="form-control" placeholder="Book Description" id="language" style="height: 100px">${obj.language || ''}</textarea>
    </div>
   
      <button type="submit" class="btn btn-primary">Submit Vocabulary
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addVocabularyForm;
