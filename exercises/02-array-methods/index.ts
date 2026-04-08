import { orders } from './orders';
import {
  getTotalAmount,
  getTotalAmountByUser,
  getOrdersAboveAmount,
  getOrderAmounts,
  getOrderById,
  getUserIdsWithTotalAmountAbove,
} from './order-functions';

// Exo 1
// Creer une fonction getTotalAmount
// calculer le montant total des commandes.
console.log('Exo 1');
console.log('total des commandes = ', getTotalAmount(orders));

// Exo 2
// Creer une fonction getTotalAmountByUser
// trouver toutes les commandes d'un meme user
// calculer leur total
console.log('Exo 2');
console.log('total des commande du user 1 = ', getTotalAmountByUser(orders, 1));

// Exo 3
// Creer un fonction getOrdersAboveAmount
// trier les commande dont le montant dépasse un seuil.
console.log('Exo 3');
console.log(
  'commandes dont le montant est trop élevé : ',
  getOrdersAboveAmount(orders, 80),
);

// Exo 4
// creer une fonction getOrderAmounts
// return un tableau de tous les montant de toute les commande
console.log('Exo4');
console.log('tableau des prix de chaque commande : ', getOrderAmounts(orders));

// Exo 5
// Creer une fonction getOrderById
// trouver uen commande par un id
console.log('Exo5');
console.log("commande dont l'id est 2 : ", getOrderById(orders, 2));

// Bonus
// Retourner les userId dont le total des commandes est :
// 👉 strictement supérieur au seuil
// 💡 Exemple attendu
// Avec les données :
// seuil 100 → [1, 2]
// seuil 200 → [2]
console.log('Bonus');
console.log(
  'listes des userID dont les commande sont trop cher : ',
  getUserIdsWithTotalAmountAbove(orders, 100),
);
