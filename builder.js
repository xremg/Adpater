
class UsuarioBuilder {
    constructor() {
        this.usuario = {
            nombre: "",
            correo: "",
            rol: "usuario",
            activo: true
        };
    }

    conNombre(nombre) {
        this.usuario.nombre = nombre;
        return this;
    }

    conCorreo(correo) {
        this.usuario.correo = correo;
        return this;
    }

    conRol(rol) {
        this.usuario.rol = rol;
        return this;
    }

    desactivar() {
        this.usuario.activo = false;
        return this;
    }

    build() {
        if (!this.usuario.nombre || !this.usuario.correo) {
            throw new Error("Nombre y correo son obligatorios");
        }

        // Devuelve una copia del objeto terminado
        return { ...this.usuario };
    }
}

// Construimos un usuario paso a paso
const usuario = new UsuarioBuilder()
    .conNombre("Carlos")
    .conCorreo("carlos@ejemplo.com")
    .conRol("administrador")
    .build();

console.log(usuario);

// Creamos otro usuario con valores diferentes
const usuario2 = new UsuarioBuilder()
    .conNombre("Ana")
    .conCorreo("ana@ejemplo.com")
    .desactivar()
    .build();

console.log(usuario2);
