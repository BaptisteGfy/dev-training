import { users, User } from './users';

// Exo 1 - Simuler une récupération asynchrone (API)
// Objectif:
// Simuler un appel API qui retourne la liste des users après un délai.

const fetchUsers = async (): Promise<User[]> => {
  return new Promise((resolve) => {
    console.log('pending');
    setTimeout(() => {
      console.log('1sec');
    }, 1000);
    setTimeout(() => {
      console.log('2sec');
    }, 2000);
    setTimeout(() => {
      console.log('3ec');
    }, 3000);
    setTimeout(() => {
      resolve(users);
    }, 4000);
  });
};

const run = async (): Promise<void> => {
  const result = await fetchUsers();
  console.log(result);
};

run();

// Exo 2 — Récupérer un user par id de façon asynchrone
// Objectif:
// attendre la récupération des users
// retourner le user correspondant à l’id

// export const fetchUserById = async (
//   id: number
// ): Promise<User | undefined> => {
//   // ...
// };

// Exo 3 — Gérer le cas d’erreur
// Objectif:
// récupérer le user
// si le user n’existe pas → lever une erreur

// export const fetchUserByIdOrThrow = async (
//   id: number
// ): Promise<User> => {
//   // ...
// };

// Exo 4 — Appeler avec try/catch
// Objectif:
// Dans cette fonction :
// appeler fetchUsers
// appeler fetchUserById(2)
// appeler fetchUserByIdOrThrow(999) dans un try/catch
// afficher un message d’erreur propre si le user n’existe pas
