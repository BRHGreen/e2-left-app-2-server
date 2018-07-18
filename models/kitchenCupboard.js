export default (sequelize, DataTypes) => {
  const KitchenCupboard = sequelize.define('kitchenCupboard', {
    landMass: DataTypes.STRING,
    cupboardNumber: DataTypes.INTEGER,
  });

  // KitchenCupboard.associate = (models) => {
  //   KitchenCupboard.hasMany(models.User, {
  //     foreignKey: 'owner',
  //   })
  // }
  return KitchenCupboard;
};
