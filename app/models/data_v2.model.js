module.exports = (sequelize, Sequelize) => {
      const DataV2 = sequelize.define("SP_Resource_List", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        Specialist: {
          type: Sequelize.STRING
        },
        Post_id: {
          type: Sequelize.INTEGER
        },
        Post_Name: {
          type: Sequelize.STRING
        },
        SP_MO_Area: {
              type: Sequelize.STRING
        }
      });
  
    return DataV2;
  };