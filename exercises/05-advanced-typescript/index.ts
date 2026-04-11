import { users } from './users';
import {
  getFirstElement,
  mergeObjects,
  getObjectId,
  getPropertyValue,
  wrapSuccess,
  wrapError,
} from './generic-utils';

console.log('=== EXO 1 ===');
console.log('First element:', getFirstElement(users));
console.log('');

console.log('=== EXO 2 ===');
console.log('Merged object:', mergeObjects({ name: 'Baptiste' }, { age: 29 }));
console.log('');

console.log('=== EXO 3 ===');
console.log('Object id:', getObjectId(users[2]));
console.log('');

console.log('=== EXO 4 ===');
console.log('Property "name":', getPropertyValue(users[0], 'name'));
console.log('Property "isActive":', getPropertyValue(users[0], 'isActive'));
// console.log(getPropertyValue(users[0], 'age')); // attempt error typescript
console.log('');

console.log('=== EXO 5 ===');
console.log('wrapSuccess(users):', wrapSuccess(users));
console.log('wrapSuccess("hello"):', wrapSuccess('hello'));

console.log(
  'wrapError("Something went wrong"):',
  wrapError('Something went wrong'),
);

console.log('');
