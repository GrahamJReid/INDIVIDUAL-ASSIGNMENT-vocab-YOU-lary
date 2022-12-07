// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/auth';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import '../styles/main2.scss';

import ViewDirectorBasedOnUserAuthStatus from './utils/viewDirector';

const init = () => {
  ViewDirectorBasedOnUserAuthStatus();
  // USE WITH FIREBASE AUTH
  // checkLoginStatus();
};
init();
