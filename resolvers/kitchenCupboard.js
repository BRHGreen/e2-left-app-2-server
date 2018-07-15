// import formatErrors from '../formatErrors';
// import requiresAuth from '../permissions';

export default {
  Query: {

    getCupboards: (parent, args, { models }) => models.KitchenCupboard.findAll(),
    
    getMainlandWestCupboards: (parent, args, { models }) => models.KitchenCupboard.findAll({
      where: {
        landMass: 'mainlandWest'
      }
    }),

    getMainlandEastCupboards: (parent, args, { models }) => models.KitchenCupboard.findAll({
      where: {
        landMass: 'mainlandEast'
      }
    })
  },
};
