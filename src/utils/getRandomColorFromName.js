export function getRandomColorFromName(name) {
  // Convert the name to a lowercase string and remove spaces
  const processedName = name.toLowerCase().replace(/\s/g, "");

  // Create a hash value based on the name using a seed value
  let hash = 0;
  for (let i = 0; i < processedName.length; i++) {
    hash = (hash << 5) - hash + processedName.charCodeAt(i);
    hash = hash & hash; // Convert to 32-bit integer
  }

  // Extract RGB values from the hash and convert to hex format
  const r = (hash & 0xff0000) >> 16;
  const g = (hash & 0x00ff00) >> 8;
  const b = hash & 0x0000ff;
  const hexColor =
    "#" + r.toString(16).padStart(2, "0") + g.toString(16).padStart(2, "0") + b.toString(16).padStart(2, "0");

  return hexColor;
}
