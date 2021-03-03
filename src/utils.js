const {database} = require("utilities");

const db = database.sequelize("nodeSample",
                              "root",
                              "123456789",
                              "mysql",
                              "localhost");

module.exports = {
	db,
};