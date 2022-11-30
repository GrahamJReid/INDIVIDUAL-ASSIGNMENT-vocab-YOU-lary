import logoutButton from '../../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';

const startApp = (user) => {
  domBuilder();
  domEvents(user);
  formEvents(user);
  // BUILD THE DOM
  // ADD THE EVENT LISTENTERS TO THE DOM
  // ADD FORM EVENT LISTENTERS TO THE DOM
  logoutButton();
  navBar();
  navigationEvents(user);
  // DYNAMICALLY ADD THE NAV
  // ADD THE LOGOUT BUTTON COMPONENT
  // ATTACH THE EVENT LISTENERS TO THE NAVBAR
};
export default startApp;
