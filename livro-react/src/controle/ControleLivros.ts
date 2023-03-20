import Livro from '../modelo/Livro';

let livros: Livro[] = [
  {
    codigo: 1,
    codEditora: 1,
    titulo: 'Livro 1',
    resumo: 'Resumo do livro 1',
    autores: ['Autor 1'],
  },
  {
    codigo: 2,
    codEditora: 2,
    titulo: 'Livro 2',
    resumo: 'Resumo do livro 2',
    autores: ['Autor 2'],
  },
  {
    codigo: 3,
    codEditora: 3,
    titulo: 'Livro 3',
    resumo: 'Resumo do livro 3',
    autores: ['Autor 3'],
  },
];

export class ControleLivros {
  obterLivros(): Livro[] {
    return livros;
  }

  incluir(livro: Livro): void {
    const codigo = livros.reduce((max, livro) => Math.max(max, livro.codigo), 0) + 1;
    livros.push({ ...livro, codigo });
  }

  excluir(codigo: number): void {
    const indiceLivro = livros.findIndex(livro => livro.codigo === codigo);
    if (indiceLivro !== -1) {
      livros.splice(indiceLivro, 1);
    }
  }
}