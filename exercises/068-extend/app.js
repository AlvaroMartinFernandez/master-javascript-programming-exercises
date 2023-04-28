let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    // Recorremos todas las propiedades del segundo objeto
    for (let key in obj2) {
      // Verificamos si la propiedad existe en el primer objeto y si no la agregamos
      if (!obj1.hasOwnProperty(key)) {
        obj1[key] = obj2[key];
      }
    }
    // Devolvemos el primer objeto actualizado
    return obj1;
  }