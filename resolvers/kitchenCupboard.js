// import formatErrors from '../formatErrors';
// import requiresAuth from '../permissions';
import sequelize from 'sequelize'

export default {

KitchenCupboard: {
  user: ({ owner }, args, { models }) => {
    return models.User.findOne({
      where: {
        id: owner,
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
    updateKitchenCupboard: (parent, { id, owner }, { models }) => {
      console.log('id', id)
      console.log('owner', owner)
      return models.KitchenCupboard.update(
      { owner },
      { where: { id } })
    }
    }
};
