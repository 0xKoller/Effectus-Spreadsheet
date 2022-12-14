// Funcion en la cual pasamos de numeros a letras para las columnas
// como sabemos la base del abecedario es 26, por lo tanto deberiamos de realizar la conversion
// de bases para obtener la letra correcta
export const numberToChar = (num: number): string => {
  const division = Math.floor(num / 26);
  const reminder = Math.floor(num % 26);

  const char = String.fromCharCode(reminder + 97).toUpperCase();
  // El -1 es debido a que nuestro 0 seria la A.
  return division - 1 >= 0 ? numberToChar(division - 1) + char : char;
};
