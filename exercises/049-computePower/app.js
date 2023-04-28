function computePower(num, exponent) {
 let result= num*num;
  for (let i=2; i<exponent;i++)
  {
    result=result*num;
  }
  return result;
}
