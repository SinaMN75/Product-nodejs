const {sequelize} = require("utilities");
const {db} = require("../utils");

const Product = db.define("Product", {
	id: {
		type: sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false,
	},
	title: {
		type: sequelize.STRING,
		allowNull: false,
	},
	description: {
		type: sequelize.STRING,
	},
});

module.exports = {Product};