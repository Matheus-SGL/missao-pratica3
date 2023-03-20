import Editora from '../modelo/Editora';

const editoras: Array<Editora> = [
  { codEditora: 1, nome: 'Editora A' },
  { codEditora: 2, nome: 'Editora B' },
  { codEditora: 3, nome: 'Editora C' }
];

export class ControleEditora {
  public getEditoras(): Array<Editora> {
    return editoras;
  }

  public getNomeEditora(codEditora: number): string {
    const editoraEncontrada = editoras.filter(editora => editora.codEditora === codEditora)[0];
    return editoraEncontrada.nome;
  }
}