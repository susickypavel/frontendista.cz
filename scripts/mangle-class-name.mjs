export function mangleClassName(memoize = true) {
  const entries = new Map();
  let newCharArray = [];
  let currentClassName = "Z";

  function nextLetter(char) {
    return char === "Z" ? "A" : String.fromCharCode(char.charCodeAt(0) + 1);
  }

  function getNextClassName(className) {
    const lastChar = className[className.length - 1];
    const remString = className.slice(0, className.length - 1);

    const newChar = lastChar === undefined ? "A" : nextLetter(lastChar);

    newCharArray.unshift(newChar);

    if (lastChar === "Z") {
      return getNextClassName(remString);
    }

    const batchString = remString + [...newCharArray].join("");
    newCharArray = [];
    return batchString;
  }

  return ({ resourcePath }, _, localName) => {
    const key = resourcePath + localName;
    if (memoize && entries.has(key)) {
      return entries.get(key);
    }

    currentClassName = getNextClassName(currentClassName);

    entries.set(key, currentClassName);

    return currentClassName;
  };
}
