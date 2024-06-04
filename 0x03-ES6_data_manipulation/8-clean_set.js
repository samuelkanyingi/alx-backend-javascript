export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }

  const res = [];
  for (const value of set) {
    if (value.startsWith(startString)) {
      res.push(value.slice(startString.length));
    }
  }

  return res.join('-');
}
