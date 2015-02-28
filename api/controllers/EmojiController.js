/**
 * EmojiController
 *
 * @description :: Server-side logic for managing emojis
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  associateWithUser: function (req, res) {

    Emoji.update({
      id: req.param('id')
    }, {
      owner: req.param('owner')
    }).exec(function (err) {
      if (err) return res.negotiate(err);

      res.ok();
    });

  }

 //  find: function (req, res){},
 //  findOne: function (req, res){},
 //  create: function (req, res){},
 //  update: function (req, res){},
	// destroy: function (req, res){},
};

