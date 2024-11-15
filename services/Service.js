import Model from "../models/Model.js";

class Service {
  model = new Model();
  validateZona = ["zona1", "zona2", "zona4", "zona4"];
  validateCandidato = ["candidatoA", "cadidatoB", "candidatoC", "enblanco"];

  getByZonaService = (zona) => {
    try {
      if(!this.validateZona.includes(zona)) throw new Error("Zona no valida");
      const data = this.model.getByZona(zona);
      return data;
    } catch (error) {
      throw error;
    }
  };

  createVotoService = (zona, candidato ) => {
    try {
      if(!this.validateZona.includes(zona)) throw new Error("Zona no valida");
      if(!this.validateCandidato.includes(candidato)) throw new Error("Candidato no valida");
      const data = this.model.createVoto(zona, candidato);
      return data;
    } catch (error) {
      throw error;
    }
  };
}

export default Service;
