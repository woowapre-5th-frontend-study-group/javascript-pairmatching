const division = (array, index) => {
  const length = array.length;
  const last = array[length - 1];
  const isEven = Math.floor(length % index) == 0;
  const divide = Math.floor(length / index);
  const newArray = [];

  for (let i = 0; i < divide; i++) {
    newArray.push(array.splice(0, index));
  }

  if (!isEven) {
    newArray[divide - 1].push(last);
  }

  return newArray;
};

module.exports = { division };
