import bcrypt from 'bcrypt'
import formatErrors from '../formatErrors';
import { tryLogin } from '../auth';
import requiresAuth from '../permissions';

export default {
  User: {
    userProfile: ({ id }, args, { models }) =>
      models.UserProfile.findOne({
        where: {
          owner: id,
        },
      }),
    kitchenCupboard: ({ id }, args, { models }) => 
      models.KitchenCupboard.findAll({
        where: {
          owner: id,
        },
      }),
  },
  Query: {
    getUser: requiresAuth.createResolver((parent, args, { models, user }) => models.User.findOne({ where: { id: user.id } })),
    allUsers: (parent, args, { models }) => models.User.findAll(),
  },
  Mutation: {
    updateUser: (parent, { id, newUsername }, { models }) =>
      models.User.update({ username: newUsername }, { where: { id } }),
    deleteUser: (parent, args, { models }) =>
      models.User.destroy({ where: args }),
    login: (parent, { email, password }, { models, SECRET, SECRET2 }) =>
      tryLogin(email, password, models, SECRET, SECRET2),
    register: async (parent, { password, ...otherArgs }, { models }) => {
      try {
        if (password.length < 5 || password.length > 100) {
          return {
            ok: false,
            errors: [
              {
                path: 'password',
                message: 'The password needs to be between 5 and 100 characters long',
              },
            ],
          };
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await models.User.create({ ...otherArgs, password: hashedPassword });
        return {
          ok: true,
          user,
        };
      } catch (err) {
        return {
          ok: false,
          errors: formatErrors(err, models),
        };
      }
    },
  },
};
