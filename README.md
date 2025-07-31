
# LENDSQR FRONTEND

This project was created to test my ability in product design translation, dynamic data rendering, and automated testing across both frontend and backend APIs. It includes a user management interface with login functionality and robust test coverage for frontend and API layers.

## Stack

- SCSS  
- React  
- Bootstrap  
- TypeScript  

## Deployment Link

[Live App](https://lendsqr-fe-test-arabomeivan.vercel.app)

## Test Documentation

[View Full Test Documentation](https://docs.google.com/document/d/1nu-BZYQEcH6N6N_gyno_U1fDGJRzyZrWtiRnXXYigDo/edit?usp=sharing)  
*(Replace with your actual test documentation link)*

---

## Setup Instructions

Follow the steps below to install, run, test, and build the project locally.

### 1. Install Node Version Manager (NVM)

Install NVM if you don’t have it already:  
[https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)

### 2. Use Node.js Version 16

```bash
nvm install 16
nvm use 16
````

### 3. Install Dependencies

Install all project dependencies:

```bash
npm install
```

### 4. Run the Frontend Locally

Start the development server:

```bash
npm run start
```

This will launch the app at `http://localhost:3000` or the default React port.

### 5. Run Automated Tests

To execute the complete test suite (Cypress and API tests):

```bash
npm run test
```

Tests include:

* Cypress (headless UI tests)
* API tests via Postman + Newman (if configured)

### 6. Build the App for Production

To create a production-ready build:

```bash
npm run build
```

This outputs the optimized files to the `/build` directory, ready for deployment.

---

## CI/CD Pipeline

This project uses **GitHub Actions** for continuous integration and deployment.

### What It Does:

* Installs dependencies in a Node 16 environment
* Runs the full test suite (frontend and API)
* If all tests pass, it triggers a **production build**
* Deploys the built app to **Vercel**

This setup ensures:

* All code changes are validated by tests before going live
* The deployed version is always stable and fully tested

---

## Test Plan: User Management Feature (Frontend & API)

### 1. Objective

Ensure robust validation of user login and management flows across:

* **Frontend** (UI functionality)
* **Backend** (API behavior)

All tests run locally before staging, using:

* Cypress with Cucumber (BDD)
* Postman collections executed with Newman

---

### 2. Test Strategy

**Frontend**:

* Gherkin feature files with Cucumber
* Cypress for UI tests

**API**:

* Apitests written in cypress too in api repository (https://github.com/arabomeivan/BookStoreAPI)
* Executed via Node

**Environment:**

* Local-only before staging
* CI pipeline must pass for Vercel deployment

**Test Focus Areas**:

* Login (valid, invalid, partial inputs)
* Viewing user list
* Creating a user
* Editing user details

---

### 3. Tools & Frameworks

| Tool           | Layer      | Purpose                               |
| -------------- | ---------- | ------------------------------------- |
| Cypress        | Frontend   | End-to-end UI testing                 |
| Cucumber       | Frontend   | BDD with Gherkin syntax               |
| Postman        | API        | API request definitions and scripting |
| Newman         | API        | CLI runner for Postman collections    |
| GitHub Actions | Both       | CI/CD automation                      |
| Vercel         | Deployment | Hosting production frontend build     |
| Local Dev Env  | Both       | Isolated test environment             |

---

### 4. Scope of Testing

| Feature     | Layer | Type       | Description                        |
| ----------- | ----- | ---------- | ---------------------------------- |
| Login       | Both  | Functional | Validate login via UI and API      |
| View Users  | Both  | Functional | Load and display user list         |
| Create User | Both  | Functional | Create user and verify persistence |
| Edit User   | Both  | Functional | Update user info via UI and API    |

---

### 5. Test Data

Tests use mocked or fixture-based data:

* Valid and invalid login credentials
* User creation payloads
* Editable user sample data

---

### 6. Risk Mitigation

* All testing is isolated to a local environment
* CI pipeline prevents deployment if any test fails
* UI + API test coverage ensures early bug detection

---

### 7. Deliverables

* `.feature` files written in Gherkin
* Cypress test specs and step definitions
* Auto-generated test coverage reports
* Test case documentation for all major flows

---
