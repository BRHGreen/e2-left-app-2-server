export default (sequelize, DataTypes) => {
  const KitchenCupboard = sequelize.define('kitchenCupboard', {
    landMass: DataTypes.STRING,
    cupboardNumber: DataTypes.FLOAT,
  });

  KitchenCupboard.associate = (models) => {
    KitchenCupboard.belongsTo(models.User, {
      foreignKey: 'id',
    })
  };
  
  return KitchenCupboard;
};
