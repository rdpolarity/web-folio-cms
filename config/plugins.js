module.exports = ({env}) => ({
  graphql: {
    config: {
      playgroundAlways: true,
      defaultLimit: 100,
      maxLimit: 100,
      apolloServer: {
        tracing: true,
        introspection: true,
      },
    }
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
})