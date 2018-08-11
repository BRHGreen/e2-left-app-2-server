// import formatErrors from '../formatErrors';
// import requiresAuth from '../permissions';
import sequelize from 'sequelize'

export default {
  
  Query: {
    getRooms: (parent, args, { models }) => models.Room.findAll({
      order: sequelize.col('roomNumber')
    })
  },
};
