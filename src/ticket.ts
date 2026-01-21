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

/* En esta función no usamos un BUCLE FOR o .REDUCE ya que las funciones que importamos ya recorren los arrays de forma independiente */
