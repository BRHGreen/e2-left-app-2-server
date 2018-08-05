export default (sequelize, DataTypes) => {
  const KitchenCupboard = sequelize.define('kitchenCupboard', {
    landMass: DataTypes.STRING,
    cupboardNumber: DataTypes.INTEGER,
  });
  return KitchenCupboard;
};
