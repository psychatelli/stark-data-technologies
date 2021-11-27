const withSass = require('@zeit/next-sass')
const withOptimizedImages = require('next-optimized-images');
const withPlugins = require("next-compose-plugins");
const withImages = require('next-images');

// module.exports = {
//   env: {
//     STRIPE_SK: 'sk_test_51I8XvjD2B2kqWDmPiV9xJrTby0FYZh5hkggZbtNSTdZUqJP5YSTETuXhDAzizatUChgJqFnflberA08aa8Kw43sS00lgsavk0z',
//     STRIPE_PK: 'pk_test_51I8XvjD2B2kqWDmPA5xiQSp9CSv4ZrclD7Anq1MMgE3bhIsqF53LWTrKF9FnQvbqgc31bqVPnaN2cvJ6PqUDh4Sf00hOKJUTPM'
//   },
// }

module.exports = withPlugins([
    [withSass],
    [ withOptimizedImages, {
        optimizeImagesInDev: true
      }
    ],
    [withImages],
    // {
    //   images: {
    //     domains: ['https://adamediadesign-nextjs.vercel.app'],
    //   },
    // }
  ]);


 




