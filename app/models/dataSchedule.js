module.exports = (sequelize, Sequelize) => {
    const Schedule = sequelize.define("schedule", {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        visit: {
          type: Sequelize.DATE,
        },
        room: {
          type: Sequelize.STRING,
        },
        appointment: {
          type: Sequelize.STRING,
        },
        slot: {
          type: Sequelize.STRING,
        },
      });
  
    return Schedule;
  };