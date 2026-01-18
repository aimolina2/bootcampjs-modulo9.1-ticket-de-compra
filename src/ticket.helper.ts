import { ResultadoLineaTicket, LineaTicket } from "./model";

const calculaPrecioConIva = (precio: number, tipoIva: string): number => {
  switch (tipoIva) {
    case "general":
      return precio * 1.21;
    case "reducido":
      return precio * 1.1;
    case "superreducidoA":
      return precio * 1.04;

    case "superreducidoB":
      return precio * 1.02;

    case "superreducidoC":
      return precio * 1.01;
    case "sinIva":
      return precio;

    default:
      throw new Error("Tipo de IVA no reconocido");
  }
};

export const lineasTicket = (lineas: LineaTicket[]): ResultadoLineaTicket[] => {
  let resultadoLineaTicket: ResultadoLineaTicket[] = [];
  for (let i = 0; i < lineas.length; i++) {
    resultadoLineaTicket[i] = {
      nombre: lineas[i].producto.nombre,
      cantidad: lineas[i].cantidad,
      precioSinIva: lineas[i].producto.precio * lineas[i].cantidad,
      tipoIva: lineas[i].producto.tipoIva,
      precioConIva:
        calculaPrecioConIva(
          lineas[i].producto.precio,
          lineas[i].producto.tipoIva,
        ) * lineas[i].cantidad,
    };
  }

  return resultadoLineaTicket;
};
