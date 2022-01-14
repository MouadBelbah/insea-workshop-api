import { gql } from 'apollo-server-core'

const typeDefs = gql`
  type Video {
    id: ID!
    "Video title"
    title: String!
    thumbnail: String
    description: String
    owner: User!
    length: Int
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    videosForHome: [Video!]!
    video(id: ID!): Video!
  }

  type AddVideoResponse {
    success: Boolean!
    message: String!
    video: Video
  }

  input AddVideoInput {
    title: String!
    description: String
    thumbnail: String
    length: Int
  }

  type Mutation {
    addVideo(input: AddVideoInput!): AddVideoResponse!
  }
`

export default typeDefs
