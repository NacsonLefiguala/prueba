"use strict";

const { handleError } = require("../utils/errorHandler");
const Domicilio = require("../models/domicilio.model.js");
/**
 * @param {*} Ciudad
 * @param {*} Calle
 * @param {*} PDF
 * @param {*} usuarioId
 * @returns
 */
async function createDomicilio(Ciudad, Calle, PDF, usuarioId) {
  try {
    const domicilio = new Domicilio({
      Ciudad,
      Calle,
      PDF,
      Usuario: usuarioId,
    });

    await domicilio.save();

    return domicilio;
  } catch (error) {
    handleError(error, "domicilio.service -> createDomicilio");
  }
}

/**
 * @param {Object} req - Objeto de petición
 * @param {Object} res - Objeto de respuesta
 */
async function updateDomicilio(id, domicilio) {
  try {
    const domicilioFound = await Domicilio.findById(id);
    if (!domicilioFound) return [null, "El domicilio no existe"];

    const { ciudad, calle } = domicilio;

    const domicilioUpdated = await Domicilio.findByIdAndUpdate(
      id,
      {
        ciudad,
        calle,
      },
      { new: true },
    );

    return [domicilioUpdated, null];
  } catch (error) {
    handleError(error, "domicilio.service -> updateDomicilio");
  }
}


  module.exports = {
    createDomicilio,
    updateDomicilio,
  };
