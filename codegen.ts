
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3000",
  documents: "src/**/*.ts",
  generates: {
    "src/graphql/crud-back/": {
      plugins: ["typescript-apollo-angular"]
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
