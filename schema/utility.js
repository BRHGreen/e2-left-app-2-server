export default `
type Utility {
  id: Int!
  utilityType: String
  utilityNumber: Int
  isOperational: Boolean
  notes: String
}

type UtilityResponse {
    ok: Boolean!
    errors: [Error!]
}

type Query {
  getUtilities: [Utility!]
}

type Mutation {
  updateUtility(
    id: Int!
    owner: Int!
  ): [Int!]!
}
`;
