export type User = {
  id: number;
  name: string;
  email: string;
};

export const users: User[] = [
  { id: 1, name: 'Baptiste', email: 'baptiste@email.com' },
  { id: 2, name: 'Laura', email: 'laura@email.com' },
  { id: 3, name: 'Paul', email: 'paul@email.com' },
];
