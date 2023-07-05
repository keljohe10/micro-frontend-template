import { mount as productsMount } from 'products/ProductsIndex';
import { mount as cartsMount } from 'carts/CartShow';

console.log('container');

productsMount(document.querySelector('#my-products'));
cartsMount(document.querySelector('#my-cart'));