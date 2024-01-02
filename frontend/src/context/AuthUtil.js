// authUtils.js
export const ObtenerIdDelInspectorDesdeEstadoDeAutenticacion = () => {
  const user = JSON.parse(localStorage.getItem('user')) || {};

  console.log("User:", user);

  // Verifica si user._id es un valor válido
  if (user._id) {
    // Convierte el ObjectId a cadena
    const userIdStr = user._id instanceof ObjectId ? user._id.toString() : user._id;
    return userIdStr;
  }

  // Devuelve null si no se puede encontrar el ID del usuario
  return null;
};

