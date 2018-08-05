// import formatErrors from '../formatErrors';
// import requiresAuth from '../permissions';
import sequelize from 'sequelize'

export default {

KitchenCupboard: {
  user: (parnet, args, { models }) => {
    
    return models.User.findOne({
      where: {
        id: parnet.owner,
      },
    })
  }
  },
  
  Query: {

    getCupboards: (parent, args, { models }) => models.KitchenCupboard.findAll({
      order: sequelize.col('cupboardNumber')
    }
    ),
    
    getMainlandWestCupboards: (parent, args, { models }) => models.KitchenCupboard.findAll({
      order: sequelize.col('cupboardNumber'),
      where: {
        landMass: 'mainlandWest'
      }
    }),

    getMainlandEastCupboards: (parent, args, { models }) => models.KitchenCupboard.findAll({
      order: sequelize.col('cupboardNumber'),
      where: {
        landMass: 'mainlandEast'
      } 
    })
  },

  Mutation: {
    updateKitchenCupboard: (parent, {
      id,
      newOwner
    }, { models }) => models.KitchenCupboard.update({
      owner: newOwner
    }, { where: { id } }),
  }
};
