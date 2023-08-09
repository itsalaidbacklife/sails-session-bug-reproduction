
describe('Replication test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Sets session data using http', () => {
    cy.setSessionViaHttp();
    cy.getSessionViaHttp();
  });

  it('Sets session data using socket', () => {
    cy.setSessionViaSocket(); // type error because req.session is undefined
    cy.getSessionViaSocket();
  });
});
