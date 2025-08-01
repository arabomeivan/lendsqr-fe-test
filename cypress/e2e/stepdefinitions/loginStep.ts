import LoginPage from '../pages/LoginPage';
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import {invalidCreds, validCreds} from "../../fixtures/login";

//Login with invalid credentials
Given('I open the login page', () => {
  LoginPage.visit();
});

When('I enter invalid username and password', () => {
  LoginPage.enterUsername(invalidCreds.email);
  LoginPage.enterPassword(invalidCreds.password);
  LoginPage.submit();

});

Then('I should not login', () => {
  cy.on('window:alert', (str) => {
    expect(str).to.equal('User not found');
  });
   cy.url().should('eq', Cypress.config('baseUrl') + '/');
});


//Login with valid credentials

Given('I launch the login page', () => {
  LoginPage.visit();
});

When('I enter valid username and password', () => {
  LoginPage.enterUsername(validCreds.email);
  LoginPage.enterPassword(validCreds.password);
  LoginPage.submit();
});

Then('I should be redirected to the dashboard', () => {
    LoginPage.waitforDashboard().should('be.visible');
  cy.url({ timeout: 30000 }).should('include', '/users'); // confirms route as well
});


//Login without filling any fields
Given('I navigate to the login page', () => {
  LoginPage.visit();
});

When('I click login without entering credentials', () => {
  LoginPage.submit();
});

Then('I should see validation errors', () => {
  cy.on('window:alert', (str) => {
    expect(str).to.equal('Please fill in both email and password');
  });

  cy.url().should('eq', Cypress.config('baseUrl') + '/'); 
});