import Service from "../services/Service.js";

class Controllers {
  service = new Service();

  getByZona =  (req, res) => {
    try {
      const { zona } = req.params;
      const data = this.service.getByZonaService(zona);
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  createVoto =  (req, res) => {
    try {
      const { zona, candidato } = req.body;
      const data = this.service.createVotoService(zona, candidato);
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };
}

export default Controllers;
