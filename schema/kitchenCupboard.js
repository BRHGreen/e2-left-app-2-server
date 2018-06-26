export default `
type KitchenCupboard {
  id: Int!
  landMass: String,
  cupboardNumber: Int,
}

type Query {
  getCupboards: [KitchenCupboard]
}
`;

