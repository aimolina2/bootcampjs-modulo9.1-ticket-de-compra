import { ResultadoLineaTicket, ResultadoTotalTicket } from "./model";

export const totalSinIva = (
  resultadoLineaTicket: ResultadoLineaTicket[],
): number => {
  let total = 0;
  for (let i = 0; i < resultadoLineaTicket.length; i++) {
    total += resultadoLineaTicket[i].precioSinIva;
  }
  return +total.toFixed(2);
};

export const totalConIva = (
  resultadoLineaTicket: ResultadoLineaTicket[],
): number => {
  let total = 0;
  for (let i = 0; i < resultadoLineaTicket.length; i++) {
    total += resultadoLineaTicket[i].precioConIva;
  }
  return +total.toFixed(2);
};

export const totalIva = (
  resultadoLineaTicket: ResultadoLineaTicket[],
): number => {
  let total = 0;
  for (let i = 0; i < resultadoLineaTicket.length; i++) {
    total +=
      resultadoLineaTicket[i].precioConIva -
      resultadoLineaTicket[i].precioSinIva;
  }
  return +total.toFixed(2);
};

export const calculaTotalesTicket = (
  resultadoLineaTicket: ResultadoLineaTicket[],
): ResultadoTotalTicket => {
  return {
    totalSinIva: totalSinIva(resultadoLineaTicket),
    totalConIva: totalConIva(resultadoLineaTicket),
    totalIva: totalIva(resultadoLineaTicket),
  };
};
