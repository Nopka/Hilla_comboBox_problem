/**
 * This module is generated from AppEndpoint.java
 * All changes to this file are overridden. Please consider to make changes in the corresponding Java file if necessary.
 * @see {@link file:///C:/Users/roussill1/Documents/Dev/hilla_combobox/src/main/java/com/example/application/AppEndpoint.java}
 * @module AppEndpoint
 */

// @ts-ignore
import client from './connect-client.default';
import type Personne from './com/example/application/Personne';

function _searchPersonne(
 search: string | undefined
): Promise<Array<Personne | undefined> | undefined> {
 return client.call('AppEndpoint', 'searchPersonne', {search});
}
export {
  _searchPersonne as searchPersonne,
};
