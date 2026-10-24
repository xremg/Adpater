
 // Sistema de pagos externo
class PagoExterno {
    realizarTransaccion(monto) {
        console.log("Procesando pago externo...");
        console.log("Monto pagado: Q" + monto);

        return "Pago realizado correctamente";
    }
}

// Interfaz que espera nuestra tienda web
class ProcesadorPago {
    procesarPago(monto) {
        throw new Error("Metodo no implementado");
    }
}

// Adaptador que conecta ambos sistemas
class PagoAdapter extends ProcesadorPago {
    constructor(pagoExterno) {
        super();
        this.pagoExterno = pagoExterno;
    }

    procesarPago(monto) {
        console.log("Adaptando solicitud de pago...");

        return this.pagoExterno.realizarTransaccion(monto);
    }
}

// Simulamos una compra en una tienda web
const servicioExterno = new PagoExterno();

const adaptador = new PagoAdapter(servicioExterno);

// La tienda utiliza el metodo que conoce
const resultado = adaptador.procesarPago(250);

console.log("Resultado:", resultado);
