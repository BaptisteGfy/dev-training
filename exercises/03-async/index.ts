import {
  countdown,
  fetchUsers,
  fetchUserById,
  fetchUserByIdOrThrow,
} from './async-functions';

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
