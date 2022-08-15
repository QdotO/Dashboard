const isSame = (a: any, b: any) => {
  if (a === b) return true;
  
  if (typeof a !== 'object' || typeof b !== 'object' || a == null || b == null) return false;
  
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  
  if (keysA.length !== keysB.length) return false;
  
  return keysA.every(key => {
    if (!keysB.includes(key)) return false;

    if (typeof a[key] === 'function' || typeof b[key] === 'function') {
      if (a[key].toString() !== b[key].toString()) return false;
    } else if (!isSame(a[key], b[key])) return false;
    return true;
  })
};

export default isSame;