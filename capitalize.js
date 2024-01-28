export default function capitalize(string) {
  const strCopy = string.trim();
  return `${strCopy[0].toUpperCase()}${strCopy.slice(1)}`;
}
