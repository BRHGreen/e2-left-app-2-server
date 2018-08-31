export default (sequelize, DataTypes) => {
  const KittyStatement = sequelize.define('kittyStatement', {
    date: DataTypes.STRING,
    counterParty: DataTypes.STRING,
    reference: DataTypes.STRING,
    type: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    balance: DataTypes.FLOAT,
    openingBalance: DataTypes.FLOAT,
  });

  return KittyStatement;
};
