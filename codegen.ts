import type { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: 'http://localhost:3000/graphql',
  documents: './src/app/graphql/crud-back/querys/*.graphql',
  overwrite: true,
  generates: {
    'src/app/graphql/querys.generates.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-apollo-angular'],
      config: {addExplicitOverride: true} 
    }
  }
}
export default config
