export default `
type kitchenCupboards {
  landMass: String!
  cupboardNumber: Int!
}

type Query {
  getCupboards: [kitchenCupboards!]
}
type Query {
  getMainlandWestCupboards: [kitchenCupboards!]
}
type Query {
  getMainlandEastCupboards: [kitchenCupboards!]
}
`;
