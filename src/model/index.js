export const borderRadiusFunc = {
  toString(borderRadius) {
    let x = borderRadius.value, y = borderRadius.value / borderRadius.ratio;
    if (borderRadius.unit === '%') {
      x = x + '%';
      y = y + '%';
    } else {
      x += borderRadius.unit;
      y += borderRadius.unit;
    }
    return x + ' / ' + y;
  }
}
