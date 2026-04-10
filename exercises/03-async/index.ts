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
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 1000);
  });
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
// runFetchUserByIdOrThrow(10000);

// Exo 4 — Appeler avec try/catch
// Objectif:
// Dans cette fonction :
// appeler fetchUsers
// appeler fetchUserById(2)
// appeler fetchUserByIdOrThrow(0)
// afficher un message d’erreur propre si le user n’existe pas

const runner = async (): Promise<void> => {
  console.log('=== ASYNC BLOCK ===');

  // EXO 1 - USER LIST
  await countdown();
  const allUsers = await fetchUsers();
  console.log('=== EXERCICE 1 ===');
  console.log('All users:', allUsers);

  // EXO 2 - USER BY ID
  const userById = await fetchUserById(2);
  console.log('=== EXERCICE 2 ===');
  console.log('User with id 2:', userById);

  // EXO 3 — USER BY ID - SUCCESS
  try {
    const user = await fetchUserByIdOrThrow(3);
    console.log('=== EXERCICE 3 (SUCCESS) ===');
    console.log(user);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error:', error.message);
    }
  }

  // EXO 3 — USER BY ID — ERROR
  try {
    await fetchUserByIdOrThrow(999);
  } catch (error) {
    console.log('=== EXERCICE 3 (ERROR) ===');
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};

runner();
