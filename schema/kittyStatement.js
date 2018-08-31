export default `
type KittyStatement {
    id: Int!,
    date: String,
    counterParty: String,
    reference: String,
    type: String,
    amount: Float,
    balance: Float,
    openingBalance: Float,
}
type KittyStatementResponse {
    ok: Boolean!
    errors: [Error!]
}
type Mutation {
    createKittyStatement(
      date: String,
      counterParty: String,
      reference: String,
      type: String,
      amount: Float,
      balance: Float,
      openingBalance: Float,
    ): KittyStatementResponse!,
}

type Query {
  getAllKittyStatements: [KittyStatement!]
}
`;

