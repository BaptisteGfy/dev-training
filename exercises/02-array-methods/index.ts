import { orders, Order } from './orders';
// Exo 1
// Creer une fonction getTotalAmount
// calculer le montant total des commandes.

const getTotalAmount = (orders: Order[]): number =>
  orders.reduce((total, order) => total + order.amount, 0);

console.log('Exo 1');
console.log('total des commandes = ', getTotalAmount(orders));

// Exo 2
// Creer une fonction getTotalAmountByUser
// trouver toutes les commandes d'un meme user
// calculer leur total

/*
const getTotalAmountByUser = (orders: Order[], userId: number): number => {
  return orders
    .filter((order) => order.userId === userId)
    .map((order) => order.amount)
    .reduce((total, amount) => (total + amount),0);
};
*/

const getTotalAmountByUser = (orders: Order[], userId: number): number => {
  return orders.reduce(
    (total, order) => (order.userId === userId ? total + order.amount : total),
    0,
  );
};

console.log('Exo 2');
console.log('total des commande du user 1 = ', getTotalAmountByUser(orders, 1));

// Exo 3
// Creer un fonction getOrdersAboveAmount
// trier les commande dont le montant dépasse un seuil.

export const getOrdersAboveAmount = (
  orders: Order[],
  amount: number,
): Order[] => {
  return orders.filter((order) => order.amount > amount);
};

console.log('Exo 3');
console.log(
  'commandes dont le montant est trop élevé : ',
  getOrdersAboveAmount(orders, 80),
);

// Exo 4
// creer une fonction getOrderAmounts
// return un tableau de tous les montant de toute les commande
export const getOrderAmounts = (orders: Order[]): number[] => {
  return orders.map((order) => order.amount);
};
console.log('Exo4');
console.log('tableau des prix de chaque commande : ', getOrderAmounts(orders));

// Exo 5
// Creer une fonction getOrderById
// trouver uen commande par un id
export const getOrderById = (
  orders: Order[],
  orderId: number,
): Order | undefined => {
  return orders.find((order) => order.id === orderId);
};
console.log('Exo5');
console.log("commande dont l'id est 2 : ", getOrderById(orders, 2));

// Bonus
// Retourner les userId dont le total des commandes est :
// 👉 strictement supérieur au seuil
// 💡 Exemple attendu
// Avec les données :
// seuil 100 → [1, 2]
// seuil 200 → [2]

const getUserIdsWithTotalAmountAbove = (
  orders: Order[],
  amount: number,
): number[] => {
  const totalsByUser = orders.reduce<Record<number, number>>((acc, order) => {
    const currentTotal = acc[order.userId] ?? 0;

    acc[order.userId] = currentTotal + order.amount;

    return acc;
  }, {});

  return Object.entries(totalsByUser)
    .filter(([, totalAmount]) => totalAmount > amount)
    .map(([userId]) => Number(userId));
};

console.log('Bonus');
console.log(
  'listes des userID dont les commande sont trop cher : ',
  getUserIdsWithTotalAmountAbove(orders, 100),
);
