import {
  totalSinIva,
  totalConIva,
  totalIva,
  calculaTotalesTicket,
} from "./calculos-totales";
import { ResultadoLineaTicket } from "./model";

describe("totalSinIva", () => {
  it("retorna la suma de los precios sin IVA de todas las líneas del ticket", () => {
    const lineasTicket: ResultadoLineaTicket[] = [
      {
        nombre: "Garbanzos",
        cantidad: 2,
        precioSinIva: 20,
        tipoIva: "general",
        precioConIva: 24.2,
      },
      {
        nombre: "Judías",
        cantidad: 1,
        precioSinIva: 10,
        tipoIva: "general",
        precioConIva: 12.1,
      },
    ];
    const resultado = 30;
    expect(totalSinIva(lineasTicket)).toBe(resultado);
  });
});

describe("totalConIva", () => {
  it("retorna la suma de los precios CON IVA de todas las líneas del ticket", () => {
    const lineasTicket: ResultadoLineaTicket[] = [
      {
        nombre: "Garbanzos",
        cantidad: 2,
        precioSinIva: 20,
        tipoIva: "general",
        precioConIva: 24.2,
      },
      {
        nombre: "Judías",
        cantidad: 1,
        precioSinIva: 10,
        tipoIva: "general",
        precioConIva: 12.1,
      },
    ];
    const resultado = 36.3;
    expect(totalConIva(lineasTicket)).toBe(resultado);
  });
});

describe("totalIva", () => {
  it("retorna la suma de los IVAs de todas las líneas del ticket", () => {
    const lineasTicket: ResultadoLineaTicket[] = [
      {
        nombre: "Garbanzos",
        cantidad: 2,
        precioSinIva: 20,
        tipoIva: "general",
        precioConIva: 24.2,
      },
      {
        nombre: "Judías",
        cantidad: 1,
        precioSinIva: 10,
        tipoIva: "general",
        precioConIva: 12.1,
      },
    ];
    const resultado = 6.3;
    expect(totalIva(lineasTicket)).toBe(resultado);
  });
});

describe("calculaTotalesTicket", () => {
  it("retorna todos los totales del ticket: con IVA, sin IVA y suma de IVA", () => {
    const lineasTicket: ResultadoLineaTicket[] = [
      {
        nombre: "Garbanzos",
        cantidad: 2,
        precioSinIva: 20,
        tipoIva: "general",
        precioConIva: 24.2,
      },
      {
        nombre: "Judías",
        cantidad: 1,
        precioSinIva: 10,
        tipoIva: "general",
        precioConIva: 12.1,
      },
    ];
    const resultado = { totalSinIva: 30, totalConIva: 36.3, totalIva: 6.3 };
    expect(calculaTotalesTicket(lineasTicket)).toEqual(resultado);
  });
});
