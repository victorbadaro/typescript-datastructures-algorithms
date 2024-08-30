import pluginJs from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	{
		extends: [pluginJs.configs.recommended, ...tseslint.configs.recommended],
		files: ['**/*.{js,mjs,cjs,ts}'],
		languageOptions: {
			globals: globals.node
		},
		rules: {
			quotes: ['error', 'single'],
			semi: ['error', 'always'],
			'comma-dangle': ['error', 'never']
		}
	}
);
