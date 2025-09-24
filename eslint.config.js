import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])

// export default defineConfig([
//   {
//     files: ['app/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
//     plugins: { js },
//     extends: ['js/recommended'],
//     languageOptions: {
//       globals: globals.browser,
//       parserOptions: {
//         ecmaFeatures: {
//           jsx: true,
//         },
//       },
//     },
//   },
//   {
//     ignores: ['node_module/', '.react-router/'],
//   },
//   tseslint.configs.recommended,
//   pluginReact.configs.flat.recommended,
//   pluginReact.configs.flat['jsx-runtime'],
//   eslintPluginPrettierRecommended,
//   {
//     rules: {
//       '@typescript-eslint/ban-ts-comment': 'off',
//       'no-useless-escape': 'warn',
//       '@typescript-eslint/no-explicit-any': 'warn',
//     },
//   },
// ])


