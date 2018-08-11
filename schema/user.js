export default `
type User {
  id: Int!
  username: String
  email: String
  createdAt: String!
  updatedAt: String!
  userProfile: UserProfile
  kitchenCupboard: [KitchenCupboard]
}

type Query {
  allUsers: [User!]
  getUser: User!
}

type RegisterResponse {
  ok: Boolean!
  user: User
  token: String
  refreshToken: String
  errors: [Error!]
}

type LoginResponse {
  ok: Boolean!
  token: String
  refreshToken: String
  errors: [Error!]
}

type Mutation {
  updateUser(id: Int!, newUsername: String): [Int!]!
  deleteUser(username: String!): Int!
  register(username: String!, email: String!, password: String!): RegisterResponse!
  login(email: String!, password: String!): LoginResponse!
}
`;
