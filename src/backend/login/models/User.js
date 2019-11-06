const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	fname: {
		type: String,
		required: true
	},
	lname: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	id: {
		type int,
		required true
	},

});

const User = module.exports = mongoose.model('User', UserSchema);
