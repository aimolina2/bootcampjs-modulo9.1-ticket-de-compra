import {
  ResultadoLineaTicket,
  LineaTicket,
  TotalPorTipoIva,
  TipoIva,
} from "./model";

const calculaPrecioConIva = (precio: number, tipoIva: string): number => {
  switch (tipoIva) {
    case "general":
      return precio * 1.21;
    case "reducido":
      return precio * 1.1;
    case "superreducidoA":
      return precio * 1.05;

    case "superreducidoB":
      return precio * 1.04;

    case "superreducidoC":
      return precio;
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

export const desgloseTipoIva = (
  lineas: ResultadoLineaTicket[],
): TotalPorTipoIva[] => {
  const calculaIva = (precioSinIva: number, tipoIva: TipoIva): number => {
    switch (tipoIva) {
      case "general":
        return precioSinIva * 0.21;
      case "reducido":
        return precioSinIva * 0.1;
      case "superreducidoA":
        return precioSinIva * 0.05;
      case "superreducidoB":
        return precioSinIva * 0.04;
      case "superreducidoC":
        return 0;
      case "sinIva":
        return 0;
      default:
        throw new Error("Tipo de IVA no reconocido");
    }
  };

  let desgloseIva: TotalPorTipoIva[] = [];

  for (let i = 0; i < lineas.length; i++) {
    const cuantia = calculaIva(lineas[i].precioSinIva, lineas[i].tipoIva);

    if (cuantia > 0) {
      const comprobarSiAplicaTipoIva = desgloseIva.find(
        (producto) => producto.tipoIva === lineas[i].tipoIva,
      );
      if (comprobarSiAplicaTipoIva) {
        comprobarSiAplicaTipoIva.cuantia = +(
          comprobarSiAplicaTipoIva.cuantia + cuantia
        ).toFixed(2);
      } else {
        desgloseIva.push({
          tipoIva: lineas[i].tipoIva,
          cuantia: +cuantia.toFixed(2),
        });
      }
    }
  }

  return desgloseIva;
};
