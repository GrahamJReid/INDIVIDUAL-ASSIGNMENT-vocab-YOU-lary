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
          <a id="all-Vocabulary"class="logout-btn nav-link navbarContent" href="#">All Vocabulary <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="logout-btn nav-link navbarContent" id="create-Vocabulary" href="#">Create Vocabulary</a>
        </li>
        <li><div id="targetFilters"><div class="dropdown">
        <button class=" logout-btn btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Language/Tech
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" id="html">HTML</a>
          <a class="dropdown-item" id="css">CSS</a>
          <a class="dropdown-item" id="javascript">JAVASCRIPT</a>
        </div>
      </div></div></li>
      <li><div id="targetSort"><div class="dropdown">
      <button class=" logout-btn btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       Sort
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" id="new">Newest to Oldest</a>
        <a class="dropdown-item" id="old">Oldest to Newest</a>
        <a class="dropdown-item" id="alpha">Alphabetically</a>
      </div>
    </div></div></li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input id="search" class=" logout-btn form-control mr-sm-2 navbarContent" type="search" placeholder="Search" aria-label="Search">
      </form>
      <div id="login-form-container"></div>
    </div>
  </nav></div>`;
  renderToDOM('#navigation', domString);
};

export default navBar;
