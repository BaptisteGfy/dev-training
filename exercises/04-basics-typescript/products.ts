export type Product = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
};

export const products: Product[] = [
  {
    id: 1,
    name: 'Iphone',
    price: 999,
    inStock: true,
  },
  {
    id: 2,
    name: 'tcl19384',
    price: 600,
    inStock: false,
  },
];
