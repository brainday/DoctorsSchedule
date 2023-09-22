module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
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
        price: {
          type: Sequelize.INTEGER
        }
      });
  
    return Product;
  };