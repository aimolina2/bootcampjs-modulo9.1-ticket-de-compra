import { LineaTicket, ResultadoLineaTicket } from "./model";
import { lineasTicket } from "./ticket.helper";

describe("lineasTicket", () => {
  it("deberia devolver un array en formato ResultadoLineaTicket", () => {
    const lineas: LineaTicket[] = [
      {
        producto: {
          nombre: "Garbanzos",
          precio: 10,
          tipoIva: "general",
        },
        cantidad: 2,
      },
    ];
    const resultado: ResultadoLineaTicket[] = [
      {
        nombre: "Garbanzos",
        cantidad: 2,
        precioSinIva: 20,
        tipoIva: "general",
        precioConIva: 24.2,
      },
    ];
    expect(lineasTicket(lineas)).toEqual(resultado);
  });
});
