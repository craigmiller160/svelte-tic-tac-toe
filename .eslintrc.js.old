const path = require('path');

module.exports = {
    root: true,
    extends: [
        'eslint:recommended'
    ],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module'
    },
    env: {
        es6: true,
        browser: true
    },
    plugins: [
        'svelte3'
    ],
    overrides: [
        {
            files: [
                '*.svelte'
            ],
            processor: 'svelte3/svlete3'
        },
        {
            files: [
                '**/*.ts?(x)'
            ],
            parser: '@typescript-eslint/parser',
            extends: [
                'plugin:@typescript-eslint/recommended'
            ],
            settings: {
                'import/resolver': {
                    typescript: {
                        project: path.resolve(process.cwd(), 'tsconfig.json')
                    }
                }
            },
            rules: {
                '@typescript-eslint/no-unused-vars': 'error',
                '@typescript-eslint/no-explicit-any': 'error'
            }
        }
    ]
};