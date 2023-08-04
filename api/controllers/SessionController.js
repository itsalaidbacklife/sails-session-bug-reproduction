
module.exports = {
  setSession: async function (req, res) {
    console.log('\nSetting session:');
    console.log(req.session); // undefined when requesting with socket client
    req.session.hasSession = true; //
    return res.ok();
  },
  getSession: function (req, res) {
    console.log('Getting session');
    console.log(req.session);
    return res.json(req.session);
  }
};
