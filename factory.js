
class NotificacionEmail {
    enviar(mensaje) {
        console.log("Correo enviado:", mensaje);
    }
}

class NotificacionSMS {
    enviar(mensaje) {
        console.log("SMS enviado:", mensaje);
    }
}

class NotificacionInterna {
    enviar(mensaje) {
        console.log("Notificacion interna:", mensaje);
    }
}

// La fabrica decide que objeto crear
class NotificacionFactory {
    static crear(tipo) {
        switch (tipo) {
            case "email":
                return new NotificacionEmail();

            case "sms":
                return new NotificacionSMS();

            case "interna":
                return new NotificacionInterna();

            default:
                throw new Error("Tipo de notificacion no valido");
        }
    }
}

// Simulamos una solicitud de una aplicacion web
const tipoNotificacion = "email";

const notificacion =
    NotificacionFactory.crear(tipoNotificacion);

notificacion.enviar("Tu pedido ha sido confirmado");

// Podemos cambiar el tipo sin modificar el envio
const otraNotificacion =
    NotificacionFactory.crear("sms");

otraNotificacion.enviar("Tu pedido esta en camino");
