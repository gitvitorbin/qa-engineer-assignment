# Summary:

  -  About Cypress test framework
  -  Project organization
  -  Installation
  -  Running the tests
  -  Test report

\
&nbsp;

### About Cypress test framework
"The value of any practice depends on its context" is the first principle of context-oriented testing and this principle was applied in this project when deciding which framework would be the ideal one for the automation approach. That said, below are the considerations about both the project and testing tool which justify why [Cypress](https://www.cypress.io/) was considered the ideal match:

 - Application "The awesome Q/A tool" simplicity: The app is quite simple and without many layers, services and technologies that would need a more dynamic tool;
 - Project Stakeholders: Project stakeholders encourage the use of the Javascript language which is the language used by Cypress;
 - Use of Gherkin language: Cypress allows the use of Gherkin language which is another practice encouraged within company's SDLC.


### Test project organization
For better oganization, everything related to the automation project was placed inside the "tests/" folder. The test files can be found in the "tests/cypress/integration/specs" folder, where they are divided into two different test scopes, which are:
  - Smoke Test (file "01-smoke-test.spec.js"): A smoke test is performed quickly to confirm whether to accept or reject the build, checking eligibility for further tests (such as Regression). It is also known as Build Verification Testing (BVT) and Builds Acceptance Testing (BAT);
  - Regression (file "02-regression.spec.js"): Regression testing is a more complete test performed to check if any changed code affects the existing features. Regression testing is responsible for the overall stability and functionality of the existing features, and whenever a new modification is added to the code, regression testing should be applied.

### Installing
Install [Node](https://nodejs.org/en/download/) (npm package comes with it) and then navigate to the "tests" folder and run the command below:

```
$ npm install
```

This command will download and install Cypress, making the environment ready to run the tests.

### Running the tests
***Prerequisite #1:*** Before running the tests, make sure the application server is started (for more information about starting the server please access the application's README.md on the root of this repository).

***Prerequisite #2:*** All commands presented in this section must be executed inside the "tests" folder of this repository.

Tests can run either on headless mode or via graphical interface. Headless mode is ideal for Continuous Integration (CI) as it uses a web browser for the tests but skips loading the browser's UI. That means the HTML page being tested isn’t rendered so everything runs faster and tests bypass interacting with the page to manipulate the browser more directly. On the other side, Cypress graphical interface (aka Test Runner) is ideal for the test automation creation phase as it allows to capture page elements easily and see commands while they execute at the same time you see the application under test.

The next presented commands allow the tests to be run individually or all at once, in headless mode.

Run the command below to run only the Smoke Test in headless mode:
```
$ npx cypress run --spec cypress/integration/specs/01-smoke-test.spec.js
```
Run the command below to run only the Regression Test in headless mode:
```
$ npx cypress run --spec cypress/integration/specs/02-regression.spec.js
```
Run the command below to run all tests in headless mode (this command will properly run first the Smoke Test and then the Regression Test):
```
$ npx cypress run --spec cypress/integration/specs/*.spec.js
```

Now, if you want to choose which tests you want to run through the Cypress graphical interface, run the following command:
```
$ npx cypress open
```
For more information about the use of the command line in Cypress, access the official documentation on [this](https://docs.cypress.io/guides/guides/command-line) link.

### Test report
Whether running the tests in headless mode or via the graphical interface, test execution report will always be presented in the same way: [Gherkin syntax](https://cucumber.io/docs/gherkin/reference/). The only difference is that while running the tests in headless mode the reports will be displayed on the command line and when running the tests via graphical interface the reports will be displayed in Cypress's own graphical interface.

Here is an example of a test report:
```
GIVEN I access the app
      WHEN I hover the mouse over the "Created questions" section title
        √ THEN I should see a hint instructional message
```
