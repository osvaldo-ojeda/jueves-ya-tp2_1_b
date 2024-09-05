const filtradaDeArray = (array) => {
  // const primero=array.filter(element=>element.curso==="Primero")
  // const newArray= primero.map(element=>element.nombre)
  // const order=newArray.sort()
  // console.log(`🚀 ~ filtradaDeArray ~ primero:`, primero)
  // console.log(`🚀 ~ filtradaDeArray ~ newArray:`, newArray)
  // console.log(`🚀 ~ filtradaDeArray ~ order:`, order)

  const data = array
    .filter((element) => element.curso === "Primero")
    .map((element) => element.nombre)
    .sort();
  console.log(`🚀 ~ filtradaDeArray ~ data:`, data);
  return data;
};
module.exports = filtradaDeArray;
