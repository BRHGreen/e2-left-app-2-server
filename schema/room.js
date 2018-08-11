export default `
type room {
  id: Int
  owner: Int
  roomNumber: Int!
  user: User
}

type Query {
  getRooms: [room!]
}

`;
