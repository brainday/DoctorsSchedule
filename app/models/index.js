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

// Model DB Doctors Shedule
db.Company = require("./dataCompany")(sequelize, Sequelize);
db.Departament = require("./dataDepartment")(sequelize, Sequelize);
db.Specialist = require("./dataSpecialist")(sequelize, Sequelize);
db.Schedule = require("./dataSchedule")(sequelize, Sequelize);



db.Company.hasMany(db.Departament, { onDelete: "cascade" });
db.Departament.belongsTo(db.Company);

db.Departament.hasMany(db.Specialist, { onDelete: "cascade" });
db.Specialist.belongsTo(db.Departament);

db.Specialist.hasMany(db.Schedule, { onDelete: "cascade" });
db.Schedule.belongsTo(db.Specialist);



db.role.belongsToMany(db.user, {
    through: "user_roles"
  });
db.user.belongsToMany(db.role, {
    through: "user_roles"
  });
  
db.ROLES = ["user", "admin"];
  
module.exports = db;