const config = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model")(sequelize, Sequelize);
db.role = require("./role.model")(sequelize, Sequelize);
db.Company = require("./data_header.model")(sequelize, Sequelize);
db.Product = require("./data_v1.model")(sequelize, Sequelize);
// db.dataV2 = require("./data_v2.model")(sequelize, Sequelize);


db.Product.hasMany(db.Company, { onDelete: "cascade" });
// db.dataV1.hasMany(db.dataHeader, {
//    foreignKey: 'MOID'
// });

// db.dataV2.hasMany(db.dataV1, {
//   foreignKey: 'SPList'
// });


db.role.belongsToMany(db.user, {
    through: "user_roles"
  });
db.user.belongsToMany(db.role, {
    through: "user_roles"
  });
  
db.ROLES = ["user", "admin"];
  
module.exports = db;