"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.mergeDeep = mergeDeep;






function isObject(obj) {
  return obj && typeof obj === 'object';
}

const isArray = Array.isArray;

function mergeDeep(...objects) {
  return objects.reduce((prev, obj) => {
    Object.keys(obj).forEach(key => {
      const pVal = prev[key];
      const oVal = obj[key];

      if (isArray(pVal) && isArray(oVal)) {
        prev[key] = pVal.concat(...oVal);
      } else if (isObject(pVal) && isObject(oVal)) {
        prev[key] = mergeDeep(pVal, oVal);
      } else {
        prev[key] = oVal;
      }
    });
    return prev;
  }, {});
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9zY3JpcHQuanMiXSwibmFtZXMiOlsiaXNPYmplY3QiLCJvYmoiLCJpc0FycmF5IiwiQXJyYXkiLCJtZXJnZURlZXAiLCJvYmplY3RzIiwicmVkdWNlIiwicHJldiIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwicFZhbCIsIm9WYWwiLCJjb25jYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFPQSxTQUFTQSxRQUFULENBQWtCQyxHQUFsQixFQUF1QjtBQUNyQixTQUFPQSxHQUFHLElBQUksT0FBT0EsR0FBUCxLQUFlLFFBQTdCO0FBQ0Q7O0FBRUQsTUFBTUMsT0FBTyxHQUFHQyxLQUFLLENBQUNELE9BQXRCOztBQUVPLFNBQVNFLFNBQVQsQ0FBbUIsR0FBR0MsT0FBdEIsRUFBK0I7QUFDcEMsU0FBT0EsT0FBTyxDQUFDQyxNQUFSLENBQWUsQ0FBQ0MsSUFBRCxFQUFPTixHQUFQLEtBQWU7QUFDbkNPLElBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZUixHQUFaLEVBQWlCUyxPQUFqQixDQUF5QkMsR0FBRyxJQUFJO0FBQzlCLFlBQU1DLElBQUksR0FBR0wsSUFBSSxDQUFDSSxHQUFELENBQWpCO0FBQ0EsWUFBTUUsSUFBSSxHQUFHWixHQUFHLENBQUNVLEdBQUQsQ0FBaEI7O0FBRUEsVUFBSVQsT0FBTyxDQUFDVSxJQUFELENBQVAsSUFBaUJWLE9BQU8sQ0FBQ1csSUFBRCxDQUE1QixFQUFvQztBQUNsQ04sUUFBQUEsSUFBSSxDQUFDSSxHQUFELENBQUosR0FBWUMsSUFBSSxDQUFDRSxNQUFMLENBQVksR0FBR0QsSUFBZixDQUFaO0FBQ0QsT0FGRCxNQUVPLElBQUliLFFBQVEsQ0FBQ1ksSUFBRCxDQUFSLElBQWtCWixRQUFRLENBQUNhLElBQUQsQ0FBOUIsRUFBc0M7QUFDM0NOLFFBQUFBLElBQUksQ0FBQ0ksR0FBRCxDQUFKLEdBQVlQLFNBQVMsQ0FBQ1EsSUFBRCxFQUFPQyxJQUFQLENBQXJCO0FBQ0QsT0FGTSxNQUVBO0FBQ0xOLFFBQUFBLElBQUksQ0FBQ0ksR0FBRCxDQUFKLEdBQVlFLElBQVo7QUFDRDtBQUNGLEtBWEQ7QUFZQSxXQUFPTixJQUFQO0FBQ0QsR0FkTSxFQWNKLEVBZEksQ0FBUDtBQWVEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI3OTM2NzcyL2hvdy10by1kZWVwLW1lcmdlLWluc3RlYWQtb2Ytc2hhbGxvdy1tZXJnZVxuICogUGVyZm9ybXMgYSBkZWVwIG1lcmdlIG9mIG9iamVjdHMgYW5kIHJldHVybnMgbmV3IG9iamVjdC4gRG9lcyBub3QgbW9kaWZ5XG4gKiBvYmplY3RzIChpbW11dGFibGUpIGFuZCBtZXJnZXMgYXJyYXlzIHZpYSBjb25jYXRlbmF0aW9uLlxuICpcbiAqIEBwYXJhbSB7Li4ub2JqZWN0fSBvYmplY3RzIC0gT2JqZWN0cyB0byBtZXJnZVxuICogQHJldHVybnMge29iamVjdH0gTmV3IG9iamVjdCB3aXRoIG1lcmdlZCBrZXkvdmFsdWVzXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xufVxuXG5jb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcCguLi5vYmplY3RzKSB7XG4gIHJldHVybiBvYmplY3RzLnJlZHVjZSgocHJldiwgb2JqKSA9PiB7XG4gICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBjb25zdCBwVmFsID0gcHJldltrZXldO1xuICAgICAgY29uc3Qgb1ZhbCA9IG9ialtrZXldO1xuXG4gICAgICBpZiAoaXNBcnJheShwVmFsKSAmJiBpc0FycmF5KG9WYWwpKSB7XG4gICAgICAgIHByZXZba2V5XSA9IHBWYWwuY29uY2F0KC4uLm9WYWwpO1xuICAgICAgfSBlbHNlIGlmIChpc09iamVjdChwVmFsKSAmJiBpc09iamVjdChvVmFsKSkge1xuICAgICAgICBwcmV2W2tleV0gPSBtZXJnZURlZXAocFZhbCwgb1ZhbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcmV2W2tleV0gPSBvVmFsO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBwcmV2O1xuICB9LCB7fSk7XG59XG4iXX0=