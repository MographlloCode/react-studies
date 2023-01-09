import React from 'react';

const Radio = ({ pergunta, options, id, onChange, value, active }) => {
  if (active === false) return null;
  return (
    <fieldset style={{ padding: '2rem', margin: '2rem' }}>
      <legend style={{ fontWeight: 'bold' }}>{pergunta}</legend>
      {options.map((option) => (
        <label key={option} style={{ margin: '1rem', fontFamily: 'monospace' }}>
          <input
            value={option}
            id={id}
            type="radio"
            onChange={onChange}
            checked={value === option}
          ></input>
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;
