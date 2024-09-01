const { getOne, getAll, getAllWith } = require("./products.js");

function main() {
  //   const FiltrarPorId = productos.porId(12);
  //   const Listar = productos.listado();
  //   const FiltrarPorStock = productos.porStock(20);

  console.log("POR ID ", getOne(12));
  console.log("LISTAR TODO", getAll());
  console.log("POR MINIMO DE STOCK ", getAllWith(20));
}

main();
