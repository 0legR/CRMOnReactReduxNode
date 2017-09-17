import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.id)) {
    errors.id = 'The identifier field is required';
  }

  if (Validator.isEmpty(data.typename)) {
    errors.typename = 'The type-name field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
