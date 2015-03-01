/**
 * TwitterController
 *
 * @description :: Server-side logic for managing twitters
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  handleLogin: function (req, res) {
    var Twitter = require('machinepack-twitter');

    // Generate a new access token for acting on behalf of a particular Twitter user account.
    Twitter.getAccessToken({
      consumerKey: sails.config.twitter.consumerKey,
      consumerSecret: sails.config.twitter.consumerSecret,
      oauthToken: req.param('oauth_token'),
      oauthVerifier: req.param('oauth_verifier'),
    }).exec({
      // An unexpected error occurred.
      error: function(err) {
        return res.negotiate(err);
      },
      // OK.
      success: function(accessTokenMetadata) {

        // Get a user's Twitter profile information.
        Twitter.getUserProfile({
          consumerKey: sails.config.twitter.consumerKey,
          consumerSecret: sails.config.twitter.consumerSecret,
          screenName: accessTokenMetadata.screenName,
          accessToken: accessTokenMetadata.accessToken,
          accessSecret: accessTokenMetadata.accessSecret
        }).exec({
          // An unexpected error occurred.
          error: function(err) {
            return res.negotiate(err);
          },
          // OK.
          success: function(result) {
            req.session.me = accessTokenMetadata.screenName;
            return res.ok();
          },
        });
      },
    });
  }
};

