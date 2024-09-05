// Array de ejemplo, puedes usar el array resultante del ejercicio anterior
let mascotasJson = [
    { nombre: "fluffy", mascota: "true", animal: "gato", edadHumana: "7" },
    { nombre: "Balto", mascota: "true", animal: "perro", edadHumana: "11" },
    { nombre: "Mandibulas", mascota: "false", animal: "tiburon", edadHumana: "50" },
    { nombre: "Max", mascota: "true", animal: "perro", edadHumana: "4" },
    { nombre: "Garfield", mascota: "true", animal: "gato", edadHumana: "8" }
];

// Ciclo while para eliminar los últimos ítems
while (mascotasJson.length > 0) {
    // Elimina el último ítem del array
    mascotasJson.pop();

    // Imprime los ítems restantes en el array
    console.log("Ítems restantes:", mascotasJson);
}

// Al romper el ciclo, imprime el mensaje
console.log("No quedan ítems en el array.");
