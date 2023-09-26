module.exports = (sequelize, Sequelize) => {
    const Specialist = sequelize.define("specialist", {
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
        uid: {
          type: Sequelize.STRING,
          notEmpty: true
        },
        job: {
          type: Sequelize.STRING,
          allowNull: false
        }
      },
      {
        timestamps: false
      });
  
    return Specialist;
  };