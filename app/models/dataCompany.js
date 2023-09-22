module.exports = (sequelize, Sequelize) => {
    const Company = sequelize.define("company", {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        oid: {
          type: Sequelize.STRING,
          allowNull: false
        }
      });
  
    return Company;
  };