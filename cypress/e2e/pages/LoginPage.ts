class LoginPage {
  visit() {
    cy.visit('/');
  }

  enterUsername(username:any) {
    cy.get('#email').type(username);
  }

  enterPassword(password:any) {
    cy.get('#password').type(password);
  }

  submit() {
    cy.get('#logincredentials').submit();
  }
}

export default new LoginPage();