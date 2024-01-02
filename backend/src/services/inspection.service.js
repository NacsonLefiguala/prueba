const Inspection = require("../models/inspection.model");

async function createInspection(lugar, fecha, observaciones, rol, inspectorId) {
  try {
    const inspection = new Inspection({
      lugar,
      fecha,
      observaciones,
      rol,
      inspector: inspectorId,
    });

    await inspection.save();

    return inspection;
  } catch (error) {
    throw error;
  }
}

const getInspectionDetails = async (inspectionId) => {
  try {
    const inspection = await Inspection.findById(inspectionId);

    // Si la inspección no existe, puedes manejarlo de la manera que prefieras
    if (!inspection) {
      throw new Error("Inspección no encontrada");
    }

    return inspection;
  } catch (error) {
    throw error;
  }
};

async function addObservations(inspectionId, observaciones) {
  try {
    const inspection = await Inspection.findOneAndUpdate(
      { _id: inspectionId },
      { observaciones },
      { new: true }
    );

    if (!inspection) {
      throw new Error("Inspección no encontrada.");
    }

    return inspection;
  } catch (error) {
    throw error;
  }
}


async function changeInspectionStatus(inspectionId, nuevoEstado) {
  try {
    const inspection = await Inspection.findOneAndUpdate(
      { _id: inspectionId }, // condiciones para buscar el documento
      { estado: nuevoEstado }, // actualización que se aplicará
      { new: true },
    );

    if (!inspection) {
      throw new Error("Inspección no encontrada.");
    }

    return inspection;
  } catch (error) {
    throw error;
  }
}

async function getInspectionsByInspectorId(inspectorId) {
  try {
    // Busca todas las inspecciones que tienen el inspectorId proporcionado
    const inspections = await Inspection.find({ inspector: inspectorId });

    return inspections;
  } catch (error) {
    throw error;
  }
}

async function getInspectionsByRol(rol) {
  try {
    // Busca todas las inspecciones que tienen el inspectorId proporcionado
    const inspections = await Inspection.find({ rol });

    return inspections;
  } catch (error) {
    throw error;
  }
}

// inspectionService.js
const getInspectionInfo = async (inspectionId) => {
  try {
    const inspection = await Inspection.findOne(
      { _id: inspectionId }, // Usamos _id como el campo para buscar, asumiendo que es el campo de identificación único
      'lugar observaciones fecha estado' // Especificamos los campos que queremos obtener
    );
    return inspection;
  } catch (error) {
    throw error;
  }
};


async function uploadJPG(inspectionId, archivoJPG) {
  try {
    // Buscar la inspección por el ID y actualizar el campo archivoJPG
    const inspection = await Inspection.findByIdAndUpdate(
      { _id: inspectionId },
      { archivoJPG },
      { new: true },
    );

    if (!inspection) {
      throw new Error("Inspección no encontrada.");
    }

    return inspection;
  } catch (error) {
    throw error;
  }
}

const getUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    console.error("Error al obtener el usuario por ID:", error);
    throw error;
  }
};


module.exports = {
  createInspection,
  addObservations,
  changeInspectionStatus,
  getInspectionsByInspectorId,
  uploadJPG,
  getInspectionsByRol,
  getUserById,
  getInspectionDetails,
  getInspectionInfo,
};

