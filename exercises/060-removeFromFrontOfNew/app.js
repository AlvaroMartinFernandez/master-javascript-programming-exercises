function removeFromFrontOfNew(arr) {
   const newArray = arr.filter((_, index) => index >0);

  return newArray;
}