function removeFromBackOfNew(arr) {
  const newArray = arr.filter((_, index) => index < arr.length - 1);

  return newArray;
}