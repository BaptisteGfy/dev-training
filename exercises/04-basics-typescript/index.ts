import { products, successResponse, errorResponse } from './products';
import {
  getProductPrice,
  isProductAvailable,
  updateProduct,
  getProductPreview,
  createProduct,
  handleResponse,
} from './products-utils';

// Demo runner for TypeScript basics exercises

console.log('=== EXO 1 ===');
console.log('Product price:', getProductPrice(products[1]));
console.log('Product availability:', isProductAvailable(products[1]));
console.log('');

console.log('=== EXO 2 ===');
console.log('Original products:', products);
console.log('Updated product:', updateProduct(products[1], { price: 100 }));
console.log('');

console.log('=== EXO 3 ===');
console.log('Product preview:', getProductPreview(products[1]));
console.log('');

console.log('=== EXO 4 ===');
console.log(
  'Created product:',
  createProduct({
    name: 'MacBook',
    price: 1499,
    inStock: true,
  }),
);
console.log('');

console.log('=== EXO 5 ===');
handleResponse(successResponse);
handleResponse(errorResponse);
console.log('');
