import { execute, parse } from 'graphql'
import { schema } from './schema'
import data from './ICPSR2079variables-example.json'
 
async function main() {
    const myQuery = parse(/* GraphQL */ `
        query {
            URN,
            FragmentInstance {
                Hello,
                TopLevelReference,
                Fragment
            }
        }
    `);
    
 
  const result = await execute({
    schema,
    document: myQuery
  });
 
  console.log('result:', result.data);
//   console.log(result.data?.FragmentInstance?.Hello);
}
 
//main()


class API {
    constructor() {
    }

    Query(query: any) {
        return this._query(query, data);
    }

    private _query(querynode: any, src: any): any {
        let result: any;
        Object.keys(querynode).forEach(key => {
            const tmp = this._get(src, key, querynode[key]);
            if (tmp) {
                if (!result) {
                    result = {};
                }
                result[key] = tmp;
            }
        });
        return result;
    }
    
    private _get(src: any, key: string, values: any): any {
        if (typeof values === 'function') {
            return values(src[key]);
        }
        if (typeof src[key] !== 'object') {
            return src[key];
        }
        if (Array.isArray(src[key])) {
            return src[key]
                .filter((e: any) => Object.keys(values).filter(v => e.hasOwnProperty(v)).length > 0)
                .map((e: any) => { return this._query(values, e); })
                .filter((e: any) => !!e);
        }
        if (!values || values.length === 0) {
            return;
        }
        if (src[key]) {
            return this._query(values, src[key]);
        }
    }
}

const api = new API();
const result = api.Query({
    'FragmentInstance': {
        'TopLevelReference': {
            'ID': null,
            'Agency': (obj: any) => obj === 'example.org' ? obj : null
        },
        'Fragment': {
            'DDIInstance': {
                'URN': null,
                'Citation': {
                    'Title': {
                        'String': null
                    }
                }
            },
            'Variable': (obj: any) => obj?.VariableRepresentation?.CodeRepresentation?.CodeListReference?.TypeOfObject === 'CodeList' ? {'ID':obj.ID} : null
        }
    }
});
console.log(JSON.stringify(result));

console.dir(result);
