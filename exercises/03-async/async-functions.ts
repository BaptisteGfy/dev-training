import { users, User } from './users';

// simulate a delay with countdown 3, 2, 1
export const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const countdown = async (): Promise<void> => {
  for (let i = 3; i > 0; i--) {
    console.log(`${i}`);
    await delay(1000);
  }
};

// Exercise 1 - Simulate an asynchronous retrieval (API)
// Objective:
// Simulate an API call
// returns the list of users after a delay.
export const fetchUsers = async (): Promise<User[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 1000);
  });
};

// Exercise 2 - find an user by id asynchronously
// Objective:
// wait for the retrieval of users (fetchUsers)
// return the user corresponding to the id
export const fetchUserById = async (id: number): Promise<User | undefined> => {
  const users = await fetchUsers();

  return users.find((user) => user.id === id);
};

// Exercise 3 - Handle the error case
// Objective:
// find the user
// if the user does not exist → throw an error
export const fetchUserByIdOrThrow = async (id: number): Promise<User> => {
  const user = await fetchUserById(id);

  if (!user) {
    throw new Error(`User with id ${id} not found`);
  }

  return user;
};
