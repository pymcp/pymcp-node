var mongoose = require('mongoose');
var nconf = require('nconf');

var postSchema = mongoose.Schema({
  subject: String,
  message: String
});

var userSchema = mongoose.Schema({
  facebook: {
    name: String,
    token: String,
    id: String
  }
});
userSchema.methods.portrait = function() {
  return '//graph.facebook.com/v2.6/' + this.facebook.id + '/picture';
};

module.exports = {
  Post: mongoose.model('Post', postSchema), 
  User: mongoose.model('User', userSchema) 
};
