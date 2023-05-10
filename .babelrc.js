
// ESM5+ will be interpreted to ESM5 if needed in
// some old browsers.
module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    ['@babel/plugin-transform-runtime']
  ]
}