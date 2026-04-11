export type Product = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
};

export type ProductPreview = Pick<Product, 'id' | 'name'>;

export type NewProduct = Omit<Product, 'id'>;

export type ApiResponse =
  | { success: true; data: Product[] }
  | { success: false; error: string };

export const products: Product[] = [
  {
    id: 1,
    name: 'iphone',
    price: 999,
    inStock: true,
  },
  {
    id: 2,
    name: 'TCL TV',
    price: 600,
    inStock: false,
  },
];

export const successResponse: ApiResponse = {
  success: true,
  data: products,
};

export const errorResponse: ApiResponse = {
  success: false,
  error: 'API error',
};
