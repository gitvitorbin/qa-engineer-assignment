# Summary:

  -  About Cypress test framework
  -  Project organization
  -  Installation
  -  Running the tests

\
&nbsp;

### About Cypress test framework
"The value of any practice depends on its context" is the first principle of context-oriented testing and it was applied here when deciding which framework would be the ideal one for the automation of this project. That said, below are the considerations about both the project and testing tool which justify why [Cypress](https://www.cypress.io/) was considered the ideal match:

 - Application "The awesome Q/A tool" simplicity: The app is quite simple: and without many layers, services and technologies that would need a more dynamic tool;
 - Project Stakeholders: Project stakeholders encourage the use of the Javascript language which is the language used by Cypress;
 - Use of Gherkin language: Cypress allows the use of Gherkin language which is another practice encouraged within StuDocu SDLC;


### Test project organization
The tests are in the "cypress/integration/specs" folder where they are divided into two different test scopes, which are::
  - Smoke Test (file smoke-test.spec.js): A smoke test is performed quickly to confirm whether to accept or reject the build, checking eligibility for further tests such as Regression. It is also known as Build Verification Testing (BVT) and Builds Acceptance Testing (BAT);
  - Regression (file regression.spec.js): Regression testing is a more complete test than the smoke test. It is performed to check whether the changed code affects the existing features or not. It ensures an application still functions as expected after any code changes, updates, or improvements. Regression testing is responsible for the overall stability and functionality of the existing features. Whenever a new modification is added to the code, regression testing is applied to guarantee that after each update, the system stays sustainable under continuous improvements.

### Installing
Install [Node](https://nodejs.org/en/download/) (npm package comes with it) then navigate to the "tests" folder and run the command below:

```
$ npm install
```

This command will download and install Cypress, making your environment ready to run the tests.

### Running the tests
***Important:*** Before running the tests, make sure the application server is started (for more information please access the application's README.md).

Headless browser automation uses a web browser for regression tests but skips loading the browsers’ UI. That means the HTML page being tested isn’t rendered (so everything runs faster) and your tests bypass interacting with the page to manipulate the browser more directly (eliminating failures due to UI-related interactions). Your regression tests are both more efficient and more reliable. The next commands presented allow the tests to be run individually or all at once, in headless mode.

Run the command below to run the Smoke Test only in headless mode:
```
$ npx cypress run --spec "cypress/integration/specs/smoke-test.spec.js
```
Run the command below to run only the Regression Test in headless mode:
```
npx cypress run --spec "cypress/integration/specs/regression.spec.js
```
Run the command below to run all tests in headless mode:
```
npx cypress run
```

Now, if you want to choose which tests you want to run through the Cypress graphical interface, run the following command:
```
npx cypress open
```
For more information about the use of the command line in Cypress, access the official documentation on [this](https://docs.cypress.io/guides/guides/command-line) link.
