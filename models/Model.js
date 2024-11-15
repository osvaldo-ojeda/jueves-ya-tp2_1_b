class Model {
  votos = [
    {
      zona: "zona1",
      candidato: "candidatoA",
    },
    {
      zona: "zona1",
      candidato: "candidatoA",
    },
    {
      zona: "zona1",
      candidato: "candidatoB",
    },
    {
      zona: "zona2",
      candidato: "candidatoA",
    },
  ];

  getByZona = (zona) => {
    const filterZona = this.votos.filter((voto) => voto.zona === zona);
    const zonaReduce = filterZona.reduce(
      (acumulador, element, idex, array) => {
        acumulador[zona][element.candidato]++;
        return acumulador;
      },
      {
        [zona]: {
          candidatoA: 0,
          candidatoB: 0,
          candidatoC: 0,
          blanco: 0,
        },
      }
    );

    return zonaReduce;
  };

  createVoto = (zona, candidato) => {
    this.votos.push({ zona, candidato });
    return "ok"
  };
}

export default Model;
