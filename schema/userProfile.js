export default `
type UserProfile {
    id: Int!
    owner: Int!
    age: Int
    occupation: String
    interests: String
    bio: String
}
type UserProfileResponse {
    ok: Boolean!
    errors: [Error!]
}
type Mutation {
    createUserProfile(
        age: Int,
        occupation: String,
        interests: String,
        bio: String,
    ): UserProfileResponse!,
    updateUserProfile(
        id: Int!
        newAge: Int,
        newOccupation: String,
        newInterests: String,
        newBio: String,
    ): [Int!]
}
`;
