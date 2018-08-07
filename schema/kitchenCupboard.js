export default `
type KitchenCupboard {
  id: Int
  landMass: String!
  owner: Int
  cupboardNumber: Float!
  user: User
}

type KitchenCupboardResponse {
    ok: Boolean!
    errors: [Error!]
}

type Query {
  getCupboards: [KitchenCupboard!]
}
type Query {
  getMainlandWestCupboards: [KitchenCupboard!]
}
type Query {
  getMainlandEastCupboards: [KitchenCupboard!]
}

type Mutation {
  updateKitchenCupboard(
    id: Int!
    owner: Int!
  ): [Int!]
}
`;
