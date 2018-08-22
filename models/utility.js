export default (sequelize, DataTypes) => {
  const Utility = sequelize.define('utility', {
    utilityType: DataTypes.STRING,
    utilityNumber: DataTypes.INTEGER,
    isOperational: DataTypes.BOOLEAN,
    notes: DataTypes.STRING,
  });
  
  return Utility;
};
