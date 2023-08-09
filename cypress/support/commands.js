/**
 * Require & configure socket connection to server
 */
const io = require('sails.io.js')(require('socket.io-client'));
// io.sails.url = 'http://localhost:1337';
// io.sails.useCORSRouteToGetCookie = false;

Cypress.Commands.add('setSessionViaSocket', () => {
// Using io to interact with session data fails because req.session is undefined
  return new Cypress.Promise((resolve, reject) => {
    io.socket.post('/session', {}, (res, jwres) => {
      if (jwres.statusCode !== 200) {
        return reject(new Error('Error setting session'));
      }
      return resolve();
    });
  });
});

Cypress.Commands.add('getSessionViaSocket', () => {
  // Using io to interact with session data fails because req.session is undefined
  return new Cypress.Promise((resolve, reject) => {
    io.socket.get('/session', (res, jwres) => {
      debugger;
      if (jwres.statusCode !== 200) {
        return reject(new Error('Error getting session'));
      }
      if (!res?.hasSession) {
        return reject(new Error(`Session data was not set; had value: ${res}`));
      }
      return resolve();
    });
  });
});

Cypress.Commands.add('setSessionViaHttp', () => {
  // Session works correctly with http requests (but fails with io)
  cy.request('POST', 'session');
});

Cypress.Commands.add('getSessionViaHttp', () => {
  // Session works correctly with http requests (but fails with io)
  cy.request('GET', 'session');
});