function lightenColor(hexColor, opacity) {
  var r = parseInt(hexColor.slice(1, 3), 16),
    g = parseInt(hexColor.slice(3, 5), 16),
    b = parseInt(hexColor.slice(5, 7), 16)
  return "rgba(" + r + ", " + g + ", " + b + ", " + opacity + ")"
}

export default lightenColor
