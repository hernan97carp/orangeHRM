import 'cypress-file-upload';
import '@4tw/cypress-drag-drop';
import 'cypress-downloadfile/lib/downloadFileCommand';
import './Commands/AdminUserManagement/AdminUserCommands/adminUserCommands';
import './commands/LoginCommands/loginCommands';
import  './Commands/AdminUserManagement/SearchUsersCommands/searchUsersCommands'
import  './Commands/PIM/employeeCommands'
const { dropDown } = require('../support/POM/Drop.Down');

// Custom function to perform a login in OrangeHRM with the option to keep the session active
//Only use these commands to test the software


// PERFORM SEARCH
Cypress.Commands.add('performSearch', (searchTerm) => {
	dropDown.dropdownHeaderHamburger.itemSearch().click().clear().type(searchTerm);
});
