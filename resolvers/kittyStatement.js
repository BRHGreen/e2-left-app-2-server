import formatErrors from '../formatErrors';

export default {
  Query: {
    getAllKittyStatements: (parent, args, { models }) => models.KittyStatement.findAll()
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