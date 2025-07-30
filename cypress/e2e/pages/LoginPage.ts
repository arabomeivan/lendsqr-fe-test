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
    cy.get('#loginbtn').click();
  }

  //Wait for the Navbar on the dashboard to ensure the user is logged in
  waitforDashboard() {
   return cy.get('#navcontent', { timeout: 10000 })
     
  }
}

export default new LoginPage();