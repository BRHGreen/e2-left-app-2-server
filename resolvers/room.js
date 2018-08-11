// import formatErrors from '../formatErrors';
// import requiresAuth from '../permissions';

export default {
  
  Query: {
    getRooms: (parent, args, { models }) => models.Room.findAll()
  },
};
