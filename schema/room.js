export default `
type Room {
  id: Int
  owner: Int
  roomNumber: Int!
}

type Query {
  getRooms: [Room!]
}

`;
