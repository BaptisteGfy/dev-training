import { Product, ProductPreview, NewProduct, ApiResponse } from './products';

// EXO 1 — Types & functions
// Objective: type function parameters and return values

export const getProductPrice = (product: Product): number => product.price;

export const isProductAvailable = (product: Product): boolean =>
  product.inStock;

// EXO 2 — Partial
// Objective: return an updated product using partial changes

export const updateProduct = (
  product: Product,
  updates: Partial<Product>,
): Product => {
  return { ...product, ...updates };
};

// EXO 3 — Pick
// Objective: return a preview of a product with selected fields

export const getProductPreview = (product: Product): ProductPreview => ({
  id: product.id,
  name: product.name,
});

// EXO 4 — Omit
// Objective: create a new product and generate an id

export const createProduct = (product: NewProduct): Product => {
  const newId = Date.now();
  return { id: newId, ...product };
};

// EXO 5 — Union types
// Objective: simulate an API response

export const handleResponse = (response: ApiResponse): void => {
  if (response.success) {
    console.log('Products:', response.data);
    return;
  }
  console.error('Error:', response.error);
};
