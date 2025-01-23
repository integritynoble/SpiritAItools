/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

const ISPROD = process.env.NODE_ENV === 'production';

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript', // 使用 Vue 的 TypeScript 配置
    'plugin:vue/vue3-recommended',
    './.eslintrc-auto-import.json', // 自动导入的配置文件
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    require: true,
    FileSystemWritableFileStream: 'readonly',
    FileSystemFileHandle: 'readonly',
    ParentMethod: 'readonly',
  },
  ignorePatterns: [
    '.eslintrc.cjs',
    'postcss.config.js',
    'tailwind.config.js',
    'viteUtil/viteProxyServer/vite-plugin-proxy-server.ts',
    'public/',
    'src/assets',
    'auto-imports.d.ts',
    'components.d.ts',
  ],
  rules: {
    // Vue 相关规则
    'vue/no-v-html': 'error',
    'vue/no-unused-vars': 'error',
    'vue/no-parsing-error': 'error',
    'vue/no-side-effects-in-computed-properties': 'error',
    'vue/component-tags-order': ['error', { order: ['template', 'script', 'style'] }],

    // TypeScript 相关规则
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',

    // 代码风格规则
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    indent: ['off', 2],
    'comma-dangle': ['error', 'never'],
    eqeqeq: ['error', 'always'],

    // 生产环境规则
    'no-console': ISPROD ? 'error' : 'off',
    'no-debugger': ISPROD ? 'error' : 'off',
  },
};