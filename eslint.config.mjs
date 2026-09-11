import playwright  from 'eslint-plugin-playwright';
import tseslint from 'typescript-eslint';

export default tseslint.config(
{
	ignores: ['node_modules//**', 'playwright/report/**', 'test-results/**'],
},
...tseslint.configs.recommended,
{
	files: ['tests/**/*.ts'],
	plugins: {
		playwright,
	},
	rules: {
		...playwright.configs['flat/recommended'].rules,
	},
}
);