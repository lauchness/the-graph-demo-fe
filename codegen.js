module.exports = {
  schema: "https://api.studio.thegraph.com/query/13937/lauchness-demo/v0.0.4",
  documents: ["**/*.graphql"],
  generates: {
    ".generated/index.tsx": {
      plugins: ["typescript", "typescript-operations", "typescript-urql"],
      config: {
        withHooks: true,
        scalars: {
          BigInt: "string",
          BigDecimal: "string",
        },
      },
    },
  },
};
