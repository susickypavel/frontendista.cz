export function cleanObjectFromFalsyValues(object: { [key: string]: any }) {
  Object.entries(object).forEach(data => {
    const [key, value] = data;

    if (!value || (Array.isArray(value) && value.length === 0)) {
      delete object[key];
    } else {
      if (typeof value === "object") {
        if (Array.isArray(value)) {
          value.forEach(l => {
            if (typeof l === "object" && l) {
              cleanObjectFromFalsyValues(l);
            }
          });
        }
      }
    }
  });
}
