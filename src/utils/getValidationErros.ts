import { ValidationError } from 'yup';

// Define uma chave genérica do tipo string para ser utilizado nas mensagens de erros
// não precisa ser key o nome
interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach(error => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
