module.exports = {
    mode: 'jit',
    content: [
      "./app/**/*.tsx",
      "./app/**/*.jsx",
      "./app/**/*.js",
      "./app/**/*.ts"
    ],
    theme: {
      extend: {}
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
        require('daisyui')
    ]
};
