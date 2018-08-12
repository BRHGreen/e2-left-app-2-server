// import formatErrors from '../formatErrors';
// import requiresAuth from '../permissions';
import sequelize from 'sequelize'

export default {
  
  Query: {
    getRooms: (parent, args, { models }) => models.Room.findAll({
      order: sequelize.col('roomNumber')
    }),
    getTopFloor: (parent, args, { models }) => models.Room.findAll({
      order: sequelize.col('roomNumber'),
      where: {
        floor: 1
      }
    }),
    getGroundFloor: (parent, args, { models }) => models.Room.findAll({
      order: sequelize.col('roomNumber'),
      where: {
        floor: 0
      }
    })
  },
};
