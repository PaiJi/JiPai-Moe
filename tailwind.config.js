module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#83A2C5",
        "primary-light": "#E5EEF8",
        "gray-102": "rgba(102,102,102,0.73)",
        "dark-666": "#666666",
        malibu:'#6CB0FF',
        steelBlue:'#467CBA'
      },
      borderRadius: {
        large: "80px",
      },
    },
  },
  variants: {
    border: ["responsive", "hover", "focus"],
  },
  plugins: [],
}
