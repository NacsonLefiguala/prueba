"use-strict";

const DomicilioService = require("../services/domicilio.service");
const { handleError } = require("../utils/errorHandler");
const { domicilioBodySchema, domicilioIdSchema } = require("../schema/domicilio.schema");
const { respondSuccess, respondError } = require("../utils/resHandler");
const Domicilio = require("../models/domicilio.model");
const asyncWrapper = require("../middlewares/asyncWrapper");
/**
 * crea domicilio
 * @param {Object} req - Objeto de petición
 * @param {Object} res - Objeto de respuesta
 */
async function createDomicilio(req, res) {
  try {
    const { Ciudad, Calle, PDF, Usuario } = req.body;


    // Crear una nueva inspección
    const domicilio = new Domicilio({
      Ciudad,
      Calle,
      PDF,
      Usuario,
    });

    // Guardar la inspección en la base de datos
    const domicilioGuardada = await domicilio.save();

    // Mostrar el ID de la inspección en la consola
    console.log("ID de la inspección guardada:", domicilioGuardada._id);

    respondSuccess(req, res, 201, domicilioGuardada);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error al crear el domicilio." });
  }
}

/**
 * actualiza un domicilio por su id
 * @param {Object} req - Objeto de petición
 * @param {Object} res - Objeto de respuesta
 */
async function updateDomicilio(req, res) {
  try {
    const { params, body } = req;
    const { error: paramsError } = domicilioIdSchema.validate(params._id);
    if (paramsError) return respondError(req, res, 400, paramsError.message);

    const { error: bodyError } = domicilioBodySchema.validate(body);
    if (bodyError) return respondError(req, res, 400, bodyError.message);

    const [domicilio, domicilioError] = await DomicilioService.updateDomicilio(params.id, body);

    if (domicilioError) return respondError(req, res, 400, domicilioError);

    respondSuccess(req, res, 200, domicilio);
  } catch (error) {
    handleError(error, "domicilio.controller -> updateDomicilio");
    respondError(req, res, 500, "No se pudo actualizar el domicilio");
  }
}

/**
 * @param {*} req
 * @param {*} res
 */
const uploadPDF = asyncWrapper(async (req, res) => {
  try {
      const { name } = req.body;
      const file = req.file.path;
      const pdf = await Domicilio.create({ name, file });
      res.status(201).json({ pdf });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error en el servidor" });
  }
});


/**
 * @param {*} req 
 * @param {*} res 
 */
const getDomicilios = async (req, res) => {
  try {
      const domicilios = await Domicilio.find();
      res.status(200).json({ domicilios });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error en el servidor" });
  }
};

module.exports = {
    createDomicilio,
    updateDomicilio,
    uploadPDF,
    getDomicilios,
};

