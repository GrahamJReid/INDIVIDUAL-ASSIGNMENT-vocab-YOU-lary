import { getVocabulary } from '../../api/vocabularyData';
import logoutButton from '../../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import { formEvents } from '../events/formEvents';
import { navigationEvents, filterEvents, sortEvents } from '../events/navigationEvents';
import { showVocab } from '../pages/vocabulary';

const startApp = (user) => {
  domBuilder();
  domEvents(user);
  formEvents(user);
  // BUILD THE DOM
  // ADD THE EVENT LISTENTERS TO THE DOM
  // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar();
  logoutButton();
  filterEvents(user);
  sortEvents();
  navigationEvents(user);
  // DYNAMICALLY ADD THE NAV
  // ADD THE LOGOUT BUTTON COMPONENT
  // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  getVocabulary(user.uid).then((userVocab) => showVocab(userVocab));
};
export default startApp;
