// 🔹 Exercice 1 — Variables & fonctions
// Créer :
// une fonction add(a, b)
// une fonction multiply(a, b)
// une fonction greet(name)
// 👉 contraintes :
// typées en TypeScript simples
import { add, multiply, greet } from './functions';

console.log('=== EXO 1 ===');
console.log('add: 10 + 5 = ', add(10, 5));
console.log('multiply: 10 * 5 = ', multiply(10, 5));
console.log('greet: ', greet('Didier'));
console.log('');

// 🔹 Exercice 2 — Objets
// Créer un objet :
// type User = {
//   id: number;
//   name: string;
//   age: number;
//   isActive: boolean;
// };
// Puis :
// - créer 2 users
// - écrire une fonction qui retourne un user actif

import { getFirstActiveUser } from './functions';
import { baptiste, laura } from './users';

console.log('=== EXO 2 ===');
console.log('getFirstActiveUser: ', getFirstActiveUser([baptiste, laura]));
console.log('');

// 🔹 Exercice 3 — Tableaux
// Créer :
// - un tableau de users
// - une fonction qui retourne :
//     - tous les users actifs
//     - le user avec un id donné
//     - tous les users inactifs (bonus)

import { users } from './users';
import { getActiveUsers, getUserById, getInactiveUsers } from './functions';

console.log('=== EXO 3 ===');
console.log('getActiveUsers: ', getActiveUsers(users));
console.log('getUserById: ', getUserById(users, 2));
console.log('getInactiveUsers: ', getInactiveUsers(users));
