# sails-session-bug

a [Sails v1](https://sailsjs.com) application

This is a reproduction repo of a bug where session data is not correctly stored when using the io.socket client. See the run history in github actions to view failing runs.

### Replicating locally
To replicate locally:
1. Clone this repo with `git clone https://github.com/itsalaidbacklife/sails-session-bug-reproduction`.
2. Install dependencies with `npm ci`.
3. Boot the application in one terminal/shell with `sails lift`.
4. Open cypress in another terminal/shell with `npx cypress open`.
5. Choose your browser of choice e.g. chrome in the cypress UI
6. Click the `reproduction.cy.js` file in Cypress to run the test file and observe the failing results
### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Version info

This app was originally generated on Wed Aug 02 2023 09:54:37 GMT-0400 (Eastern Daylight Time) using Sails v1.2.5.


