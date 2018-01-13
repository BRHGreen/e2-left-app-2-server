import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  'auth_template',
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
