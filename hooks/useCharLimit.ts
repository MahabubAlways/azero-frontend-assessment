export const useCharLimit = (str) => {
  const maxChars = 100;
  return str.length > maxChars ? str.substring(0, maxChars) + "..." : str;
};
