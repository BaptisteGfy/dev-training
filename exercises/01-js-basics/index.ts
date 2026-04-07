// 🔹 Exercice 1 — Variables & fonctions
// Créer :
// une fonction add(a, b)
// une fonction multiply(a, b)
// une fonction greet(name)

// 👉 contraintes :
// typées en TypeScript
// simples

const add = (a: number, b: number) => a + b;

const multiply = (a: number, b: number) => a * b;

const greet = (name: string) => `Hello ${name}`;

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

type User = {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
};

const baptiste: User = {
  id: 0,
  name: 'Baptiste',
  age: 29,
  isActive: true,
};
const laura: User = {
  id: 1,
  name: 'Laura',
  age: 34,
  isActive: false,
};
const paul: User = {
  id: 2,
  name: 'Paul',
  age: 32,
  isActive: false,
};
const marie: User = {
  id: 3,
  name: 'Marie',
  age: 25,
  isActive: true,
};

const getFirstActiveUser = (users: User[]): User | undefined =>
  users.find((user) => user.isActive);

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

const users: User[] = [baptiste, laura, paul, marie];

const getActiveUsers = (users: User[]): User[] => {
  return users.filter((user) => user.isActive);
};

const getUserById = (users: User[], id: number): User | undefined => {
  return users.find((user) => user.id === id);
};

const getInactiveUsers = (users: User[]): User[] => {
  return users.filter((user) => !user.isActive);
};

console.log('=== EXO 3 ===');
console.log('getActiveUsers: ', getActiveUsers(users));
console.log('getUserById: ', getUserById(users, 2));
console.log('getInactiveUsers: ', getInactiveUsers(users));
