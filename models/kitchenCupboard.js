export default (sequelize, DataTypes) => {
  const KitchenCupboard = sequelize.define('kitchenCupboard', {
    landMass: DataTypes.STRING,
    cupboardNumber: DataTypes.INTEGER,
    shelfNumber: DataTypes.FLOAT,
  });
  return KitchenCupboard;
};
