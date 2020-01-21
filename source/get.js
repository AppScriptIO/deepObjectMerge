export function extractPropertyFromObject(propertyObject: Object, propertyToExtract: Object | Array) {
  return Object.entries(propertyObject).reduce((accumulator, [key, value]) => {
    if (!Array.isArray(propertyToExtract)) propertyToExtract = Object.keys(propertyToExtract) // depending on the propertyToExtract type - as some may be an object of nested options.
    if (propertyToExtract.includes(key)) accumulator[key] = value
    return accumulator
  }, {})
}
