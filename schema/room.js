export default `
type Room {
  id: Int
  owner: Int
  roomNumber: Int!
  floor: Int!
  user: User
}

type Query {
  getRooms: [Room!]
}

type Query {
  getTopFloor: [Room!]
}
type Query {
  getGroundFloor: [Room!]
}

type Mutation {
  updateRoom(
    id: Int!
    owner: Int!
  ): [Int!]!
}
`;
