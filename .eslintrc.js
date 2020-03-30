module.exports = {
	root: true,
	env: {
		es6: true,
		node: true
	},
	extends: [
		"eslint:recommended",
		"plugin:vue/recommended",
		"prettier/vue"
	],
	parserOptions: {
		parser: "babel-eslint",
		sourceType: "module"
	},
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
		"indent": ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		"quotes": ["error", "double"],
		"semi": ["error", "never"]
	},
	overrides: [
		{
			files: [
				"**/__tests__/*.{j,t}s",
				"**/tests/unit/**/*.spec.{j,t}s"
			],
			env: {
				jest: true
			}
		}
	]
}
