// import formatErrors from '../formatErrors';
// import requiresAuth from '../permissions';

export default {
  Query: {
    getUtilities: (parent, args, { models }) => models.Utility.findAll(),
  },
  Mutation: {
    updateUtility: (parent, { id }, { models }) => (
      models.Utility.update(
      { where: { id } })
    )
  },
};
