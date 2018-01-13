
import formatErrors from '../formatErrors';
import requiresAuth from '../permissions';

export default {
  Mutation: {
    updateUserProfile: (parent, {
      id,
      newAge,
      newOccupation,
      newInterests,
      newBio,
    }, { models }) => models.UserProfile.update({
      age: newAge,
      occupation: newOccupation,
      interests: newInterests,
      bio: newBio,
    }, { where: { id } }),
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
