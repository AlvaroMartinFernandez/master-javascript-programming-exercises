let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
    function removeNumbersLessThan(num, obj) {
        // Recorremos todas las propiedades del objeto
        for (let key in obj) {
          // Verificamos si el valor de la propiedad es un número mayor que el número dado
          if (typeof obj[key] === 'number' && obj[key] < num) {
            // Eliminamos la propiedad
            delete obj[key];
          }
        }
        // Devolvemos el objeto actualizado
        return obj;
    
}

