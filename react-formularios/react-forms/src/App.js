import React from 'react';

function App() {
  // Modo 1: Um state pra cada input
  const [textarea, setTextarea] = React.useState('');
  const [select, setSelect] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [checkbox, setCheckbox] = React.useState(false);
  const [cores, setCores] = React.useState([]);

  // Modo 2: Uma função handler para os inputs
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
  });

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
    setProduto(target.value);
    setCheckbox();
  }

  function handleColorChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          type="text"
          value={form.nome}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="Email">email</label>
        <input
          id="email"
          type="text"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="textarea">Textarea</label>
        <textarea
          id="textarea"
          value={textarea}
          onChange={({ target }) => setTextarea(target.value)}
          rows="5"
        />
      </div>
      <div>
        <select
          value={select}
          onChange={({ target }) => setSelect(target.value)}
          id="produtos"
        >
          <option disabled value="">
            Selecione
          </option>
          <option value="notebook">notebook</option>
          <option value="smartphone">smartphone</option>
          <option value="tablet">tablet</option>
        </select>
        {select}
      </div>
      <div>
        <label>
          <input
            type="radio"
            onChange={handleChange}
            name="produto"
            value="smartphone"
          />
          Smartphone
        </label>
        <label>
          <input
            type="radio"
            onChange={handleChange}
            name="produto"
            value="notebook"
          />
          Notebook
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            value="Termos"
            checked={checkbox}
            onChange={({ target }) => setCheckbox(target.checked)}
          />
          Li e aceito os termos.
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            value="cor1"
            checked={checkbox}
            onChange={handleColorChange}
          />
          Cor 1
        </label>
        <label>
          <input
            type="checkbox"
            value="cor2"
            checked={cores}
            onChange={handleColorChange}
          />
          Cor 2
        </label>
        <label>
          <input
            type="checkbox"
            value="cor3"
            checked={cores}
            onChange={handleColorChange}
          />
          Cor 3
        </label>
      </div>
      w{produto}
      <button>Enviar</button>
    </form>
  );
}

export default App;
