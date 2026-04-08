import { Order } from './orders';

// Exo 1
export const getTotalAmount = (orders: Order[]): number =>
  orders.reduce((total, order) => total + order.amount, 0);

// Exo 2
export const getTotalAmountByUser = (orders: Order[], userId: number): number =>
  orders.reduce(
    (total, order) => (order.userId === userId ? total + order.amount : total),
    0,
  );

// Exo 3
export const getOrdersAboveAmount = (
  orders: Order[],
  amount: number,
): Order[] => {
  return orders.filter((order) => order.amount > amount);
};

// Exo 4
export const getOrderAmounts = (orders: Order[]): number[] => {
  return orders.map((order) => order.amount);
};

// Exo 5
export const getOrderById = (
  orders: Order[],
  orderId: number,
): Order | undefined => {
  return orders.find((order) => order.id === orderId);
};

// Bonus
export const getUserIdsWithTotalAmountAbove = (
  orders: Order[],
  amount: number,
): number[] => {
  // “acc sera un objet clé numérique → valeur numérique”
  const totalsByUser = orders.reduce<Record<number, number>>((acc, order) => {
    const currentTotal = acc[order.userId] ?? 0;

    acc[order.userId] = currentTotal + order.amount;

    return acc;
  }, {});

  return Object.entries(totalsByUser)
    .filter(([, totalAmount]) => totalAmount > amount)
    .map(([userId]) => Number(userId));
};
