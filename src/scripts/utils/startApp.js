import logoutButton from '../../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';

const startApp = () => {
  domBuilder(); // BUILD THE DOM
  // ADD THE EVENT LISTENTERS TO THE DOM
  // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton();// ADD THE LOGOUT BUTTON COMPONENT
  // ATTACH THE EVENT LISTENERS TO THE NAVBAR
};
export default startApp;
startApp();
