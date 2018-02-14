const orm = require("../config/orm.js");

const ass = {
	all: function(cb) {
		orm.selectAll("asses", function(res) {
			cb(res);
		});
	},
	create: function(cols, vals, cb) {
		orm.insertOne("asses", cols, vals, function(res) {
			cb(res);
		});
	},
	update: function(objColVals, condition, cb) {
		orm.updateOne("asses", objColVals, condition, function(res) {
			cb(res);
		})
	}
}

module.exports = ass;