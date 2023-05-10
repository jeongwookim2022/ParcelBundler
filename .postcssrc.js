// ESM - brwoser에서 동작하는 import와 export는 ESM 따름.
// CommonJS - nodeJS에서 사용

// import autoprefixer from 'autoprefixer';
const autoprefixer = require('autoprefixer');


// export {
//   plugins: [
//     autoprefixer
//   ]
// }
module.exports = {
  plugins: [
    autoprefixer
  ]
}