
export function hashCode(str: string) {
  let hash = 0;
  for (let i = 0, len = str.length; i < len; i+=1) {
      const chr = str.charCodeAt(i);
      hash = (hash << 5) - hash + chr; // eslint-disable-line no-bitwise
      hash |= 0; // eslint-disable-line no-bitwise
      // Convert to 32bit integer
  }
  return hash;
}
