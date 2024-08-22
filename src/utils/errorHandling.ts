export const handleError = (error: any): string => {
  if (error.message) {
    return error.message;
  }
  return "Ocorreu um erro desconhecido";
};
