export type User = {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
};

export const baptiste: User = {
  id: 0,
  name: 'Baptiste',
  age: 29,
  isActive: true,
};
export const laura: User = {
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

export const users: User[] = [baptiste, laura, paul, marie];
