import LoginPage from '../pages/LoginPage';
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import loginData from "../../fixtures/login.json";

//Login with invalid credentials
Given('I open the login page', () => {
  LoginPage.visit();
});

When('I enter invalid username and password', () => {
  LoginPage.enterUsername(loginData.email);
  LoginPage.enterPassword(loginData.password);
  LoginPage.submit();

});

Then('I should not login', () => {
   cy.url().should('eq', Cypress.config('baseUrl') + '/');
});


//Login with valid credentials

Given('I launch the login page', () => {
  LoginPage.visit();
});

When('I enter valid username and password', () => {
  LoginPage.enterUsername(loginData.email);
  LoginPage.enterPassword(loginData.password);
  LoginPage.submit();
});

Then('I should be redirected to the dashboard', () => {
  cy.url().should('include', '/users'); // or your target route
  cy.contains('Welcome').should('be.visible');
});


//Login without filling any fields
Given('I navigate to the login page', () => {
  LoginPage.visit();
});

When('I click login without entering credentials', () => {
  LoginPage.submit();
});

Then('I should see validation errors', () => {
  cy.contains('Email is required').should('be.visible');
  cy.contains('Password is required').should('be.visible');
  cy.url().should('eq', Cypress.config('baseUrl') + '/'); // still at login
});