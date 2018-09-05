import formatErrors from '../formatErrors';
import sequelize from 'sequelize'

export default {
  Query: {
    getAllKittyStatements: (parent, args, { models }) => models.KittyStatement.findAll({
      order: [['date', 'DESC']]
    })
  },
  Mutation: {
    createKittyStatement: async (parent, args, { models }) => {
      try {
        await models.KittyStatement.create({...args})
        return {
          ok: true
        }
      } catch (err) {
        return {
          ok: false,
          errors: formatErrors(err, models),
        };
      }
    }
  }
}