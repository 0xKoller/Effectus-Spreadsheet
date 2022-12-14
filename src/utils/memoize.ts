type MemoizedContent = any;

const memoizedContent: MemoizedContent = {};

// Funcion que consiste en memorizar si la celda tiene o no un atomo ya generado
// si no lo tiene lo genera, y si lo tiene devuelve su atomo.
export const memoize = (cellId: string, atomFactory: any) => {
  if (memoizedContent[cellId]) {
    return memoizedContent[cellId];
  }

  memoizedContent[cellId] = atomFactory();

  return memoizedContent[cellId];
};
