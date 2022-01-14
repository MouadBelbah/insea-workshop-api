import { dummyVideos, dummyUsers } from './dummy-data.js'

const resolvers = {
  Video: {
    owner: (parent, args, context, info) => {
      const ownerId = parent.ownerId
      return dummyUsers.find(({ id }) => id === ownerId)
    },
  },
  Query: {
    videosForHome: (parent, args, context, info) => {
      return dummyVideos
    },
    video: (parent, { id: argsId }, context, info) => {
      return dummyVideos.find(({ id }) => id === argsId)
    },
  },

  Mutation: {
    addVideo: async (_, args, ctx, info) => {
      const { title, description, thumbnail, length, ownerId } = args.input
      //run validation
      //check if owner exists
      const owner = dummyUsers.find(({ id }) => id === ownerId)
      if (!owner)
        return {
          success: false,
          message: `Owner with id ${ownerId} does not exist`,
        }

      const newVideo = {
        id: 'randomId',
        title,
        description,
        thumbnail,
        length,
        ownerId,
      }
      dummyVideos.push(newVideo)
      return {
        success: true,
        message: `Video created successfully`,
        video: newVideo,
      }
    },
  },
}

export default resolvers
