var mongoose = require('mongoose');
mongoose.connect('mongodb://pymcp:jE71sQjC7S77iCGeEvWsEdL@localhost/pymcp');

var Post = mongoose.model('Post', {subject: String, message: String}, 'posts');

module.exports = {
  Post: Post
};
