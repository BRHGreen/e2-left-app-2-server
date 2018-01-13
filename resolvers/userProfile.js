
import formatErrors from '../formatErrors';
import requiresAuth from '../permissions';

export default {
  Mutation: {
    createUserProfile: requiresAuth.createResolver(async (parent, args, { models, user }) => {
      try {
        await models.UserProfile.create({ ...args, owner: user.id });
        return {
          ok: true,
        };
      } catch (err) {
        return {
          ok: false,
          errors: formatErrors(err, models),
        };
      }
    }),
  },
};
