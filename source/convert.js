"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.streamToString = streamToString;function streamToString(stream, enc, cb) {
  if (typeof enc === 'function') {
    cb = enc;
    enc = null;
  }
  cb = cb || function () {};

  var str = '';

  return new Promise(function (resolve, reject) {
    stream.on('data', function (data) {
      str += typeof enc === 'string' ? data.toString(enc) : data.toString();
    });
    stream.on('end', function () {
      resolve(str);
      cb(null, str);
    });
    stream.on('error', function (err) {
      reject(err);
      cb(err);
    });
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9jb252ZXJ0LmpzIl0sIm5hbWVzIjpbInN0cmVhbVRvU3RyaW5nIiwic3RyZWFtIiwiZW5jIiwiY2IiLCJzdHIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm9uIiwiZGF0YSIsInRvU3RyaW5nIiwiZXJyIl0sIm1hcHBpbmdzIjoibUhBQU8sU0FBU0EsY0FBVCxDQUF3QkMsTUFBeEIsRUFBZ0NDLEdBQWhDLEVBQXFDQyxFQUFyQyxFQUF5QztBQUM5QyxNQUFJLE9BQU9ELEdBQVAsS0FBZSxVQUFuQixFQUErQjtBQUM3QkMsSUFBQUEsRUFBRSxHQUFHRCxHQUFMO0FBQ0FBLElBQUFBLEdBQUcsR0FBRyxJQUFOO0FBQ0Q7QUFDREMsRUFBQUEsRUFBRSxHQUFHQSxFQUFFLElBQUksWUFBVyxDQUFFLENBQXhCOztBQUVBLE1BQUlDLEdBQUcsR0FBRyxFQUFWOztBQUVBLFNBQU8sSUFBSUMsT0FBSixDQUFZLFVBQVNDLE9BQVQsRUFBa0JDLE1BQWxCLEVBQTBCO0FBQzNDTixJQUFBQSxNQUFNLENBQUNPLEVBQVAsQ0FBVSxNQUFWLEVBQWtCLFVBQVNDLElBQVQsRUFBZTtBQUMvQkwsTUFBQUEsR0FBRyxJQUFJLE9BQU9GLEdBQVAsS0FBZSxRQUFmLEdBQTBCTyxJQUFJLENBQUNDLFFBQUwsQ0FBY1IsR0FBZCxDQUExQixHQUErQ08sSUFBSSxDQUFDQyxRQUFMLEVBQXREO0FBQ0QsS0FGRDtBQUdBVCxJQUFBQSxNQUFNLENBQUNPLEVBQVAsQ0FBVSxLQUFWLEVBQWlCLFlBQVc7QUFDMUJGLE1BQUFBLE9BQU8sQ0FBQ0YsR0FBRCxDQUFQO0FBQ0FELE1BQUFBLEVBQUUsQ0FBQyxJQUFELEVBQU9DLEdBQVAsQ0FBRjtBQUNELEtBSEQ7QUFJQUgsSUFBQUEsTUFBTSxDQUFDTyxFQUFQLENBQVUsT0FBVixFQUFtQixVQUFTRyxHQUFULEVBQWM7QUFDL0JKLE1BQUFBLE1BQU0sQ0FBQ0ksR0FBRCxDQUFOO0FBQ0FSLE1BQUFBLEVBQUUsQ0FBQ1EsR0FBRCxDQUFGO0FBQ0QsS0FIRDtBQUlELEdBWk0sQ0FBUDtBQWFEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHN0cmVhbVRvU3RyaW5nKHN0cmVhbSwgZW5jLCBjYikge1xuICBpZiAodHlwZW9mIGVuYyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNiID0gZW5jXG4gICAgZW5jID0gbnVsbFxuICB9XG4gIGNiID0gY2IgfHwgZnVuY3Rpb24oKSB7fVxuXG4gIHZhciBzdHIgPSAnJ1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICBzdHJlYW0ub24oJ2RhdGEnLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICBzdHIgKz0gdHlwZW9mIGVuYyA9PT0gJ3N0cmluZycgPyBkYXRhLnRvU3RyaW5nKGVuYykgOiBkYXRhLnRvU3RyaW5nKClcbiAgICB9KVxuICAgIHN0cmVhbS5vbignZW5kJywgZnVuY3Rpb24oKSB7XG4gICAgICByZXNvbHZlKHN0cilcbiAgICAgIGNiKG51bGwsIHN0cilcbiAgICB9KVxuICAgIHN0cmVhbS5vbignZXJyb3InLCBmdW5jdGlvbihlcnIpIHtcbiAgICAgIHJlamVjdChlcnIpXG4gICAgICBjYihlcnIpXG4gICAgfSlcbiAgfSlcbn1cbiJdfQ==