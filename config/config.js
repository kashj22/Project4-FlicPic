var mongoURI = process.env.MONGOLAB_URI || 'mongodb://localhost/flicpic';

module.exports = {
  'secret': process.env.FLICPICAPP_SECRET,
  'database': mongoURI
};