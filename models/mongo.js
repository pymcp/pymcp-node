var mongoose = require('mongoose');
var nconf = require('nconf');
mongoose.connect(nconf.get('mongo:uri'));

var Post = mongoose.model('Post', {subject: String, message: String}, 'posts');
var User = mongoose.model('Users', {name: String, facebookId: String});

module.exports = {
  Post: Post,
  User: User
};
