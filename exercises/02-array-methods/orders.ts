export type Order = {
  id: number;
  userId: number;
  amount: number;
};

export const orders: Order[] = [
  { id: 1, userId: 1, amount: 100 },
  { id: 2, userId: 1, amount: 50 },
  { id: 3, userId: 2, amount: 200 },
  { id: 4, userId: 3, amount: 80 },
  { id: 5, userId: 2, amount: 40 },
  // { id: 6, userId: 3, amount: 120 },
  // { id: 7, userId: 1, amount: 30 },
  // { id: 8, userId: 2, amount: 150 },
];
