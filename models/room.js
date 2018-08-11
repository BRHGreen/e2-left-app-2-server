export default (sequelize, DataTypes) => {
  const Room = sequelize.define('room', {
    roomNumber: DataTypes.INTEGER,
  });

  Room.associate = (models) => {
    Room.belongsTo(models.User, {
      foreignKey: 'id',
    })
  };

  return Room;
};
