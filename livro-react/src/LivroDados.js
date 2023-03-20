import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ControleLivros } from './controle/ControleLivros';
import { ControleEditora } from './controle/ControleEditora';

const LivroDados = () => {
  const controleLivro = new ControleLivros();
  const controleEditora = new ControleEditora();

  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState(0);

  const opcoes = controleEditora.getEditoras().map(({ codEditora, nome }) => ({
    value: codEditora,
    text: nome,
  }));

  const navigate = useNavigate();

  const tratarCombo = (evento) => {
    setCodEditora(Number(evento.target.value));
  };

  const incluir = (evento) => {
    evento.preventDefault();

    const livro = {
      codigo: 0,
      titulo,
      resumo,
      autores: autores.split("\n"),
      codEditora,
    };

    controleLivro.incluir(livro);
    navigate("/");
  };

  return (
    <main className='container justify-content-center'>
      <h1>Dados do Livro</h1>
      <form onSubmit={incluir}>
        <div className="form-group">
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            className="form-control"
            id="titulo"
            value={titulo}
            onChange={(evento) => setTitulo(evento.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="resumo">Resumo</label>
          <textarea
            className="form-control"
            id="resumo"
            rows="3"
            value={resumo}
            onChange={(evento) => setResumo(evento.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="editora">Editora</label>
          <select
            className="form-control"
            id="editora"
            value={codEditora}
            onChange={tratarCombo}
          >
            {opcoes.map(({ value, text }) => (
              <option key={value} value={value}>
                {text}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="autores">Autores (separados por linha)</label>
          <textarea
            className="form-control"
            id="autores"
            rows="3"
            value={autores}
            onChange={(evento) => setAutores(evento.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Salvar Dados
        </button>
      </form>
    </main>
  );
};

export default LivroDados;