function sumaElementos(array) {
  // const suma=array.reduce((acumulador, element, index, array)=>acumulador+element)
  // const suma=array.reduce((acumulador, element, index, array)=>acumulador+element, "10")
  const suma = array.reduce((acumulador, element, index, array) => {
    acumulador.push(element);
    return acumulador;
  }, []);
  console.log(`🚀 ~ sumaElementos ~ suma:`, suma);
}
module.exports = sumaElementos;
