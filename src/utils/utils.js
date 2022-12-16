const division = (array, index) => {
  const length = array.length;
  const divide =
    Math.floor(length / index) + (Math.floor(length % index) > 0 ? 1 : 0);
  const newArray = [];

  for (let i = 0; i < divide; i++) {
    newArray.push(array.splice(0, index));
  }

  return newArray;
};

module.exports = { division };
