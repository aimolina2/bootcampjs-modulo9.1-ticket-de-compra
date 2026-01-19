import { LineaTicket, TicketFinal } from "./model";
import { lineasTicket, desgloseTipoIva } from "./ticket.helper";
import { calculaTotalesTicket } from "./calculos-totales";

export const calculaTicket = (compra: LineaTicket[]): TicketFinal => {
  const lineas = lineasTicket(compra);
  const total = calculaTotalesTicket(lineas);
  const desgloseIva = desgloseTipoIva(lineas);
  return {
    lineas: lineas,
    total: total,
    desgloseIva: desgloseIva,
  };
};

// const calculaTicket = (lineasTicket: LineaTicket[]) => {
//   lineasTicket
//     .reduce
//     // ...
//     ();
// };
