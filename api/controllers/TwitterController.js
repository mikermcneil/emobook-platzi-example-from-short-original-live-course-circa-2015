/**
 * TwitterController
 *
 * @description :: Server-side logic for managing twitters
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  handleLogin: function (req, res) {
    req.session.me = 'asdgsagasdg';
    return res.ok();
  }
};

