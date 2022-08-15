module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        debug: process.env.NODE_ENV !== 'production',
        modules: false,
        loose: true
      }
    ],
    '@babel/preset-typescript',
    '@babel/preset-react'
  ],
  plugins: [
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true
      }
    ],
    ['@babel/plugin-syntax-dynamic-import'],
    ['@babel/plugin-proposal-optional-chaining'],
    [
      'babel-plugin-styled-components',
      {
        displayName: true,
        fileName: false
      }
    ]
  ],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            useBuiltIns: 'usage',
            shippedProposals: true,
            corejs: { version: 3 }
          }
        ],
        '@babel/preset-typescript',
        '@babel/preset-react'
      ]
    }
  }
};
