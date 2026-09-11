import { defineConfig } from '@playwright/test'

export default defineConfig ({
	testDir: './tests',
	timeout: 30_000,
	use: {
		baseURL: process.env.POMIDORQA_BASE_URL || 'http://aiqa.su',
	},
	projects: [
		{ name: 'e2e', testDir: './tests/e2e' },
	],
});