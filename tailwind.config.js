module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#83A2C5",
        "primary-light": "#E5EEF8",
        "gray-102":"rgba(102,102,102,0.73)",
        "dark-666":"#666666"
      },
    },
  },
  variants: {
    border:['responsive', 'hover', 'focus']
  },
  plugins: [],
}
