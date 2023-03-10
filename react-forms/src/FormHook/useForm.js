import React from 'react';

const types = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: 'Cep Inválido',
  },
  email: {
    regex: /\S+@\S+\.\S+/,
    message: 'Email Inválido',
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState(null);
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (value.length === 0) {
      setError('Preencha um valor!');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
};

export default useForm;
