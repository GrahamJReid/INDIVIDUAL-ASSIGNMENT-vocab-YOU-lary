import renderToDOM from '../../utils/renderToDOM';

const navBar = () => {
  const domString = `<div id="navnav"><nav class="navbar navbar-expand-lg">
    <a class="navbar-brand" href="#"><i class="fas fa-braille navbar-logo"><p class=" nav-link title"></p></i></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a id="all-Vocabulary"class="nav-link navbarContent" href="#">All Vocabulary <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link navbarContent" id="create-Vocabulary" href="#">Create Vocabulary</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input id="search" class=" logout-btn form-control mr-sm-2 navbarContent" type="search" placeholder="Search" aria-label="Search">
        <button class=" logout-btn btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
      <div id="login-form-container"></div>
    </div>
  </nav></div>`;
  renderToDOM('#navigation', domString);
};

export default navBar;
