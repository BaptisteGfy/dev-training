import { products, Product } from './products';

// EXO 1 — Types & fonctions
// Objectif: Reprendre des bases propres

const getProductPrice = (product: Product): number => product.price;

const isProductAvailable = (product: Product): boolean => product.inStock;

// EXO 2 — Partial
// Objectif

// Comprendre les mises à jour

// À faire

// Créer une fonction :

// updateProduct(product: Product, updates: Partial<Product>): Product

// 👉 elle doit :

// retourner un nouveau produit
// appliquer les updates

// 💡 Exemple :

// updateProduct(product, { price: 99 })
// 🔹 EXO 3 — Pick
// Objectif

// Sélectionner des champs utiles

// Créer un type :

// type ProductPreview = Pick<Product, 'id' | 'name'>

// Puis :

// getProductPreview(product: Product): ProductPreview
// 🔹 EXO 4 — Omit
// Objectif

// Créer un produit sans certains champs

// Créer un type :

// type NewProduct = Omit<Product, 'id'>

// Puis :

// createProduct(product: NewProduct): Product

// 👉 génère un id automatiquement (Math.random ou autre)

// 🔹 EXO 5 — Union & logique
// Objectif

// Commencer à raisonner avec des types

// Créer :

// type ApiResponse =
//   | { success: true; data: Product[] }
//   | { success: false; error: string };

// Puis :

// handleResponse(response: ApiResponse): void

// 👉 afficher :

// les produits si success
// l’erreur sinon
