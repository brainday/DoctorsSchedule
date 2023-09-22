module.exports = (sequelize, Sequelize) => {
    const Schedule = sequelize.define("schedule", {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        visit: {
          type: Sequelize.DATE,
          allowNull: false
        },
        room: {
          type: Sequelize.STRING,
          allowNull: false
        },
        apointment: {
          type: Sequelize.STRING,
          allowNull: false
        },
        slot: {
          type: Sequelize.STRING,
          allowNull: false
        },
      });
  
    return Schedule;
  };