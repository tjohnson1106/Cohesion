/**
 * @flow
 * @relayHash 2057d301b9270951070c8e76d59129e5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type List$ref = any;
export type appQueryVariables = {||};
export type appQueryResponse = {|
  +$fragmentRefs: List$ref
|};
export type appQuery = {|
  variables: appQueryVariables,
  response: appQueryResponse,
|};
*/


/*
query appQuery {
  ...List
}

fragment List on RootQueryType {
  allLinks {
    ...Link
    id
  }
}

fragment Link on Link {
  description
  url
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "appQuery",
  "id": null,
  "text": "query appQuery {\n  ...List\n}\n\nfragment List on RootQueryType {\n  allLinks {\n    ...Link\n    id\n  }\n}\n\nfragment Link on Link {\n  description\n  url\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "appQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "List",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "appQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allLinks",
        "storageKey": null,
        "args": null,
        "concreteType": "Link",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "description",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "url",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
// prettier-ignore
(node/*: any*/).hash = 'd3a8c02cbef6b596d20a4d4abb4b3356';
module.exports = node;
