export default `
type KitchenCupboard {
  landMass: String
  owner: Int
  cupboardNumber: Int
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
