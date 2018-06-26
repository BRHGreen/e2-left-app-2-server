
import formatErrors from '../formatErrors';
import requiresAuth from '../permissions';

export default {
  Query: {
    getCupboards: (parent, args, { models }) => models.KitchenCupboard.findAll(),
  }  
}
