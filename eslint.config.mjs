import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt([
    {
        files: ['**/*.vue'],
        rules: {
            // ... 其他规则
            'padding-line-between-statements': [
                'error',
                { blankLine: 'always', prev: '*', next: 'return' },
                { blankLine: 'always', prev: 'return', next: '*' },
            ],
            'vue/html-self-closing': 'off',
            // 新增规则
            'no-console': 'warn', // 警告使用console
            'no-debugger': 'error', // 禁止使用debugger
            eqeqeq: ['error', 'always'], // 要求使用 === 和 !==
            curly: ['error', 'all'], // 要求所有控制语句使用一致的括号风格
            'no-unused-vars': 'warn', // 警告未使用的变量
            /*             'max-len': ['warn', { code: 100 }], // 与 Prettier 的 printWidth 保持一致 */
            'vue/max-attributes-per-line': 'off', // 关闭每行属性数量限制
            'vue/html-closing-bracket-newline': 'off', // 关闭 HTML 标签闭合括号换行
            'vue/first-attribute-linebreak': 'off', // 关闭第一个属性换行
            'vue/require-default-prop': 'error', // 要求 props 有默认值
        },
    },
    {
        rules: {
            'no-undef': 'off', // 关闭未定义变量的检查
        },
    },
]);
