// import formatErrors from '../formatErrors';
// import requiresAuth from '../permissions';

export default {
  Query: {

    getCupboards: (parent, args, { models }) => models.KitchenCupboard.findAll(),
    
    getmainlandWestCupboards: (parent, args, { models }) => models.KitchenCupboard.findAll({
      where: {
        landMass: 'mainlandWest'
      }
    }),

    getmainlandEastCupboards: (parent, args, { models }) => models.KitchenCupboard.findAll({
      where: {
        landMass: 'mainlandEast'
      }
    })
  },
};
