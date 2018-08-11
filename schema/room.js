export default `
type room {
  id: Int
  owner: Int
  roomNumber: Int!
  floor: Int!
  user: User
}

type Query {
  getRooms: [room!]
}

type Query {
  getTopFloor: [room!]
}

`;
