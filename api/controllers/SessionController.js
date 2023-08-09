
module.exports = {
  setSession: async function (req, res) {
    const reqType = req.isSocket ? 'socket' : 'http';
    console.log(`\nSetting session: from ${reqType}`);
    console.log(req.signedCookies);
    console.log(req.session); // undefined when requesting with socket client
    if (req.session) {
      req.session.hasSession = true;
    }
    return res.ok();
  },
  getSession: function (req, res) {
    const reqType = req.isSocket ? ' from socket' : 'http';
    console.log(`\nGetting session from ${reqType}`);
    console.log(req.signedCookies);
    console.log(req.session);
    return res.json(req.session);
  }
};
