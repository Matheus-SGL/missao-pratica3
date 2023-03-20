import { ControleLivros } from './controle/ControleLivros';
import { ControleEditora } from './controle/ControleEditora';
import { useState, useEffect } from 'react';

function LinhaLivro(props) {
    const { livro, excluir } = props;
    const controleEditora = new ControleEditora();
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);
  
    return (
      <tr>
        <td>
          {livro.titulo}
          <button className="btn btn-danger d-flex" onClick={() => excluir(livro.codigo)}>Excluir</button>
        </td>
        <td>{livro.resumo}</td>
        <td>{nomeEditora}</td>
        <td>
          <ul>
            {livro.autores.map((autor, index) => (
              <li key={index}>{autor}</li>
            ))}
          </ul>
        </td>
      </tr>
    );
  }

  function LivroLista() {
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);
    const controleLivros = new ControleLivros();
  
    useEffect(() => {
      if (!carregado) {
        setLivros(controleLivros.obterLivros());
        setCarregado(true);
      }
    }, [carregado, controleLivros]);
  
    function excluir(codigo) {
      controleLivros.excluir(codigo);
      setCarregado(false);
    }
  
    return (
      <main className='container justify-content-center'>
        <h1>Catálogo de Livros</h1>
        <table className="table table-striped table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Título</th>
              <th>Resumo</th>
              <th>Editora</th>
              <th>Autores</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro) => (
              <LinhaLivro
                key={livro.codigo}
                livro={livro}
                excluir={excluir}
              />
            ))}
          </tbody>
        </table>
      </main>
    );
  }
  
  export default LivroLista;