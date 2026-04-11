import { products, Product } from './products';

// EXO 1 — Types & fonctions
// Objectif: Reprendre des bases propres

const getProductPrice = (product: Product): number => product.price;

const isProductAvailable = (product: Product): boolean => product.inStock;

// EXO 2 — Partial
// Objectif
// Comprendre les mises à jour
// À faire
// Créer une fonction : updateProduct
// 👉 elle doit :

const updateProduct = (
  product: Product,
  updates: Partial<Product>,
): Product => {
  return { ...product, ...updates };
};

console.log('=== EXO 1 ===');
console.log(products);
console.log(updateProduct(products[1], { price: 100 }));
console.log('');
// retourner un nouveau produit
// appliquer les updates

// 💡 Exemple :

// updateProduct(product, { price: 99 })
// 🔹 EXO 3 — Pick
// Objectif

// Sélectionner des champs utiles
// Créer un type :
type ProductPreview = Pick<Product, 'id' | 'name'>;

const getProductPreview = (product: Product): ProductPreview => {
  return { id: product.id, name: product.name };
};

console.log('=== EXO 3 ===');
console.log(getProductPreview(products[1]));
console.log('');

// 🔹 EXO 4 — Omit
// Objectif
// Créer un produit sans certains champs
// Créer un type :

type NewProduct = Omit<Product, 'id'>;

const createProduct = (product: NewProduct): Product => {
  const newID = Math.random();
  return { id: newID, ...product };
};

console.log('=== EXO 4 ===');
console.log(
  createProduct({
    name: 'MacBook',
    price: 1499,
    inStock: true,
  }),
);
console.log('');

// 👉 génère un id automatiquement (Math.random ou autre)

// 🔹 EXO 5 — Union & logique
// Objectif
// Commencer à raisonner avec des types

type ApiResponse =
  | { success: true; data: Product[] }
  | { success: false; error: string };

const handleResponse = (response: ApiResponse): void => {
  if (response.success) {
    console.log('Products:', response.data);
  } else {
    console.error('Error:', response.error);
  }
};

const successResponse: ApiResponse = {
  success: true,
  data: products,
};

const errorResponse: ApiResponse = {
  success: false,
  error: 'Erreur API',
};

console.log('=== EXO 5 ===');
handleResponse(successResponse);
handleResponse(errorResponse);
console.log('');
