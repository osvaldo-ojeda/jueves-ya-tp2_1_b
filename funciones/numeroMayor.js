function numeroMayor(array) {
  //   let n = array[0];
  //   //[2,3,6,7]
  //   array.forEach((element) => {
  //     if (n < element) {
  //       n = element;
  //     }
  //   });
  //   console.log(`🚀 ~ numeroMayor ~ n:`, n);
  //   return n;
//   console.log([...array])
  let n = Math.max(...array);
  console.log(`🚀 ~ numeroMayor ~ n:`, n);
}

module.exports = numeroMayor;
