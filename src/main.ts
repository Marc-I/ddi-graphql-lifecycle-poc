import { execute, parse } from 'graphql'
import { schema } from './schema'
 
async function main() {
    const myQuery = parse(/* GraphQL */ `
        query {
            URN,
            FragmentInstance {
                TopLevelReference
            }
        }
    `);
 
  const result = await execute({
    schema,
    document: myQuery
  });
 
  console.log('result:', result.data);
}
 
main()