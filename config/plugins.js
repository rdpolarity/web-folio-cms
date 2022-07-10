module.exports = () => ({
  graphql: {
    config: {
      playgroundAlways: true,
      defaultLimit: 10,
      maxLimit: 20,
      apolloServer: {
        tracing: true,
        introspection: true,
      },
    }
  }
})