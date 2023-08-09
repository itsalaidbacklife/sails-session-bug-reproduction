
describe('Replication test', () => {
  beforeEach(() => {
    // cy.visit('/');
  });

  it('Sets session data using http', () => {
    cy.setSessionViaHttp();
    cy.getSessionViaHttp();
  });

  it('Sets session data using socket', () => {
    cy.setSessionViaSocket();
    cy.getSessionViaSocket();
  });

  it('Keeps separate sessions for socket vs http', () => {

    cy.setSessionViaSocket('socket');
    cy.setSessionViaHttp('http');

    // Verify socket session
    cy.getSessionViaSocket().then((res) => {
      expect(res.hasSession).to.eq(true);
      expect(res.customVal).to.eq('socket');
    });

    // Verify http session as separate
    cy.getSessionViaHttp().then((res) => {
      const { body } = res;
      expect(body.hasSession).to.eq(true);
      expect(body.customVal).to.eq('http');
    });

    // Socket session is preserved (and distinct)
    cy.getSessionViaSocket().then((res) => {
      expect(res.hasSession).to.eq(true);
      expect(res.customVal).to.eq('socket');
    });
  });


});
