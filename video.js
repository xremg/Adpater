
class ConfiguracionApp {
    constructor() {
        if (ConfiguracionApp.instancia) {
            return ConfiguracionApp.instancia;
        }

        this.apiUrl = "https://api.ejemplo.com";
        this.modo = "desarrollo";

        ConfiguracionApp.instancia = this;
    }

    mostrarConfiguracion() {
        console.log("API:", this.apiUrl);
        console.log("Modo:", this.modo);
    }
}

// Creamos dos objetos
const config1 = new ConfiguracionApp();
const config2 = new ConfiguracionApp();

// Ambos hacen referencia a la misma instancia
console.log(config1 === config2); // true

config1.mostrarConfiguracion();

// Modificamos la configuración desde el primer objeto
config1.modo = "produccion";

// El segundo objeto refleja el mismo cambio
console.log(config2.modo); // produccion

