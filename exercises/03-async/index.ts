import { users, User } from './users';

// rajout entrainement pour simuler un délai d'attente
const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

const countdown = async () => {
  for (let i = 3; i > 0; i--) {
    console.log(`${i}`);
    await delay(1000);
  }
};
// Exo 1 - Simuler une récupération asynchrone (API)
// Objectif:
// Simuler un appel API qui retourne la liste des users après un délai.

const fetchUsers = async (): Promise<User[]> => {
  console.log('pending');
  await countdown();
  return users;
  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(users);
  //   }, 3000);
  // });
};

const runFetchUsers = async (): Promise<void> => {
  const result = await fetchUsers();
  console.log('Exo 1:');
  console.log(result);
};

// runFetchUsers();

// Exo 2 — Récupérer un user par id de façon asynchrone
// Objectif:
// attendre la récupération des users (fetchUsers)
// retourner le user correspondant à l’id

export const fetchUserById = async (id: number): Promise<User | undefined> => {
  const users = await fetchUsers();
  return users.find((user) => user.id === id);
};

const runFetchUserById = async (): Promise<void> => {
  const result = await fetchUserById(2);
  console.log('Exo 2:');
  console.log(result);
};
// runFetchUserById();

// Exo 3 — Gérer le cas d’erreur
// Objectif:
// récupérer le user
// si le user n’existe pas → lever une erreur

export const fetchUserByIdOrThrow = async (id: number): Promise<User> => {
  const user = await fetchUserById(id);

  if (!user) {
    throw new Error(`User with id ${id} not found`);
  }

  return user;
};

const runFetchUserByIdOrThrow = async (id: number): Promise<void> => {
  try {
    const result = await fetchUserByIdOrThrow(id);
    console.log('Exo 3:');
    console.log(result);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
  }
};

// runFetchUserByIdOrThrow(2);
runFetchUserByIdOrThrow(10000);

// Exo 4 — Appeler avec try/catch
// Objectif:
// Dans cette fonction :
// appeler fetchUsers
// appeler fetchUserById(2)
// appeler fetchUserByIdOrThrow(999) dans un try/catch
// afficher un message d’erreur propre si le user n’existe pas
