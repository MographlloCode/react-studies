import React from 'react';
import Input from './FormComponents/Input';
import Select from './FormComponents/Select';
import Radio from './FormComponents/Radio';
import Checkbox from './FormComponents/Checkbox';
import useForm from './FormHook/useForm';

const Form = () => {
  const [nome, setNome] = React.useState('');
  // const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');
  const [fruta, setFruta] = React.useState('');
  const [automovel, setAutomovel] = React.useState([]);
  const cep = useForm('cep');
  const email = useForm('email');

  function handleName({ target }) {
    setNome(target.value);
  }

  // function handleEmail({ target }) {
  //   setEmail(target.value);
  // }

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate() && email.validate()) {
      console.log('enviou');
    } else {
      console.log('nao enviou');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="nome"
        label="Nome"
        value={nome}
        onChange={handleName}
        required
      />
      {/* <Input id="email" label="Email" value={email} onChange={handleEmail} /> */}
      <Select
        options={['smartphone', 'tablet']}
        value={produto}
        setValue={setProduto}
      />
      <h2>Cores</h2>
      <Radio options={['azul', 'vermelho']} value={cor} setValue={setCor} />
      <h2>Frutas</h2>
      <Radio options={['limao', 'morango']} value={fruta} setValue={setFruta} />
      <h2>Checkboxes</h2>
      <Checkbox
        options={['Carro', 'Moto']}
        value={automovel}
        setValue={setAutomovel}
      />
      <h2>Validação</h2>
      <Input
        id="cep"
        label="CEP"
        type="text"
        placeholder="00000-000"
        {...cep}
      />
      <Input id="email" label="Email" type="email" {...email} />

      <button>Enviar</button>
    </form>
  );
};

export default Form;
