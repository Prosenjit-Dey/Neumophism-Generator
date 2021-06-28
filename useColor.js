export default function useColor(col) {
  //convert hex color to rgb color
  const color = col;
  const red = color[1] + color[2];
  const green = color[3] + color[4];
  const blue = color[5] + color[6];
  const r = parseInt(red, 16);
  const g = parseInt(green, 16);
  const b = parseInt(blue, 16);
  return {
    r,
    g,
    b,
    lightShadow: `rgb(${r + 60},${g + 60},${b + 60})`,
    darkShadow: `rgb(${r - 60},${g - 60},${b - 60})`,
  };
}
