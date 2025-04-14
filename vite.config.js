import { defineConfig } from "vite";
import{resolve} from "path";

// export default defineConfig({
//     build:{
//         rollupOptions:{
//             input:{
//                 main: resolve(__dirname,"index.html"),
//                 about: resolve(__dirname,"about.html"),
//                 contact: resolve(__dirname,"contact.html"),
//                 products: resolve(__dirname,"products.html"),
//                 addToCart: resolve(__dirname,"addToCart.html"),
//             },
//         },
//     },
// })

export default defineConfig({
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html"),
          about: resolve(__dirname, "about.html"),
          contact: resolve(__dirname, "contact.html"),
          products: resolve(__dirname, "products.html"),
          addToCart: resolve(__dirname, "addToCart.html"),
        },
        output: {
          manualChunks: {
            cart: [
              './src/addToCart.js',
              './src/fetchQuantityFromCartLS.js',
              './src/getCartProdFromLS.js',
              './src/incremantDecrement.js',
              './src/removeProdFromCart.js',
              './src/updateCartProductTotal.js',
              './src/updateCartValue.js'
            ],
            ui: [
              './src/footer.js',
              './src/header.js',
              './src/showToast.js'
            ],
            products: [
              './src/homeProductCards.js',
              './src/homeQuantityToggle.js',
              './src/showAddToCards.js'
            ]
          }
        }
      }
    }
  })