import { LineaTicket, ResultadoLineaTicket, TotalPorTipoIva } from "./model";
import { lineasTicket, desgloseTipoIva } from "./ticket.helper";

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

describe("desgloseTipoIva", () => {
  it("deberia devolver un array en formato TotalPorTipoIva con dos tipos de IVA", () => {
    const producto: ResultadoLineaTicket[] = [
      {
        nombre: "Garbanzos",
        cantidad: 2,
        precioSinIva: 20,
        tipoIva: "general",
        precioConIva: 24.2,
      },
      {
        nombre: "Lasaña",
        cantidad: 1,
        precioSinIva: 5,
        tipoIva: "superreducidoA",
        precioConIva: 5.25,
      },
    ];
    const resultado: TotalPorTipoIva[] = [
      { tipoIva: "general", cuantia: 4.2 },
      { tipoIva: "superreducidoA", cuantia: 0.25 },
    ];
    expect(desgloseTipoIva(producto)).toEqual(resultado);
  });
  it("deberia devolver un array en formato TotalPorTipoIva con dos tipos de IVA. sin incluir el último", () => {
    const producto: ResultadoLineaTicket[] = [
      {
        nombre: "Garbanzos",
        cantidad: 2,
        precioSinIva: 20,
        tipoIva: "general",
        precioConIva: 24.2,
      },
      {
        nombre: "Lasaña",
        cantidad: 1,
        precioSinIva: 5,
        tipoIva: "superreducidoA",
        precioConIva: 5.25,
      },
      {
        nombre: "Perfume",
        cantidad: 4,
        precioSinIva: 40,
        tipoIva: "general",
        precioConIva: 48.4,
      },
      {
        nombre: "Leche",
        cantidad: 1,
        precioSinIva: 2,
        tipoIva: "superreducidoC",
        precioConIva: 2,
      },
    ];
    const resultado: TotalPorTipoIva[] = [
      { tipoIva: "general", cuantia: 12.6 },
      { tipoIva: "superreducidoA", cuantia: 0.25 },
    ];
    expect(desgloseTipoIva(producto)).toEqual(resultado);
  });
});
