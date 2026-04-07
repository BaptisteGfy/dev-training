import { User } from './users';

export const add = (a: number, b: number) => a + b;

export const multiply = (a: number, b: number) => a * b;

export const greet = (name: string) => `Hello ${name}`;

export const getFirstActiveUser = (users: User[]): User | undefined =>
  users.find((user) => user.isActive);

export const getActiveUsers = (users: User[]): User[] => {
  return users.filter((user) => user.isActive);
};

export const getUserById = (users: User[], id: number): User | undefined => {
  return users.find((user) => user.id === id);
};

export const getInactiveUsers = (users: User[]): User[] => {
  return users.filter((user) => !user.isActive);
};
