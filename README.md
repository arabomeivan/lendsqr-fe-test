# LENDSQR FRONTEND ENGINEERING TEST

This project was created to test my ability in product design translation, dynamic data rendering, and automated testing across both frontend and backend APIs.

## Stack

- SCSS  
- React  
- Bootstrap  
- TypeScript  

## Deployment Link

[View Deployment](https://lendsqr-fe-test-arabomeivan.vercel.app)

## Test Documentation

You can find full test documentation [here](https://docs.google.com/document/d/1nu-BZYQEcH6N6N_gyno_U1fDGJRzyZrWtiRnXXYigDo/edit?usp=sharing)  


---

## Setup Instructions

1. **Install Node Version Manager (NVM)**  
   Make sure NVM is installed: [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)


2. **Use Node 16**  
   ```bash
   nvm install 16
   nvm use 16

3. **Install Dependencies**  
   ```bash
   npm install

4. ** Run the Frontend Locally**  
   ```bash
   npm run start

5. ** Run Automated Tests**  
   ```bash
   npm run test

## CI/CD Pipeline

This project uses GitHub Actions for continuous integration and deployment.

### What It Does:

- Installs dependencies in a Node 16 environment  
- Runs the full test suite frontend  
- If all tests pass, it triggers a production build  
- Deploys the built app to Vercel  

### This setup ensures:

- All code changes are validated by tests before going live  
- The deployed version is always stable and fully tested  
