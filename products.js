let objetos = [
  {
    id: 12,
    nombre: "producto 1",
    stock: 99,
  },
  {
    id: 23,
    nombre: "producto 3",
    stock: 1,
  },
  {
    id: 3,
    nombre: "producto 2",
    stock: 15,
  },
  {
    id: 912,
    nombre: "producto 4",
    stock: 1812,
  },
];

function getOne(id) {
  return objetos.find((objeto) => objeto.id == id);
}

function getAll() {
  return objetos;
}

function getAllWith(minStock) {
  let productosConStock = objetos.filter((objeto) => objeto.stock >= minStock);
  return productosConStock;
}

// exports.porId = getOne;
// exports.listado = getAll;
// exports.porStock = getAllWith;

module.exports = { getOne, getAll, getAllWith };
