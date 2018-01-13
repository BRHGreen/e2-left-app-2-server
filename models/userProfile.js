export default (sequelize, DataTypes) => {
  const UserProfile = sequelize.define('userProfile', {
    age: DataTypes.INTEGER,
    occupation: DataTypes.STRING,
    interests: DataTypes.STRING,
    bio: DataTypes.STRING,
  });
  return UserProfile;
};
