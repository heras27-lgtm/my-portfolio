module.exports = {
content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
theme: {
extend: {
colors: {
accent: '#64ffda', // cyan accent from portfolio theme
neon: '#64ffda', // portfolio cyan/teal
background: '#0f1419', // dark navy background
textLight: '#ccd6f6', // light text
text: '#a8b2d1', // regular text
textMuted: '#8892b0' // muted text
},
fontFamily: {
sans: ['Inter', 'ui-sans-serif', 'system-ui']
}
}
},
plugins: []
}