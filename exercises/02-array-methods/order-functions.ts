import { Order } from './orders';

export const getTotalAmount = (orders: Order[]): number =>
  orders.reduce((total, order) => total + order.amount, 0);

