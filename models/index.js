import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  'e2_left_app_2',
  'test_username_1',
  'test_password_1',
  {
    host: 'localhost',
    dialect: 'postgres',
    define: {
      underscored: true,
    },
  },
);


const db = {
  User: sequelize.import('./user'),
  UserProfile: sequelize.import('./userProfile'),
  KitchenCupboard: sequelize.import('./kitchenCupboard'),
  Room: sequelize.import('./room'),
  Utility: sequelize.import('./utility'),
  KittyStatement: sequelize.import('./kittyStatement'),
};

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

// needed to run the sequelize.sync in index
db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
