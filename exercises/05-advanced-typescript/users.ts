export type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

export type ApiResult<T> =
  | { success: true; data: T }
  | { success: false; error: string };

export const users: User[] = [
  { id: 1, name: 'Baptiste', email: 'baptiste@email.com', isActive: true },
  { id: 2, name: 'Laura', email: 'laura@email.com', isActive: false },
  { id: 3, name: 'Paul', email: 'paul@email.com', isActive: true },
];
