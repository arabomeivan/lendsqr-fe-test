Feature: Login

  Scenario: Login with invalid credentials
    Given I open the login page
    When I enter invalid username and password
    Then I should not login

  Scenario: Login with valid credentials
    Given I open the login page
    When I enter valid username and password
    Then I should be redirected to the dashboard

  Scenario: Login without filling any fields
    Given I open the login page
    When I click login without entering credentials
    Then I should see validation errors