import { useState } from 'react';
import Acordeao from './components/Acordeao';
import Paginacao from './components/Paginacao';
import BarraProgresso from './components/BarraProgresso';
import Abas from './components/Abas';
import MenuSuspenso from './components/MenuSuspenso';
import { useToast } from './ToastContext';

const produtos = [
  'Notebook', 'Mouse', 'Teclado', 'Monitor', 'Fone de ouvido', 'Webcam',
  'Cadeira gamer', 'Pen drive', 'HD externo', 'Impressora', 'Microfone', 'Roteador',
];
const porPagina = 4;

const perguntas = [
  { titulo: 'Qual o prazo de entrega?', conteudo: 'O prazo é de 5 a 10 dias úteis. Lorem ipsum dolor sit amet.' },
  { titulo: 'Posso trocar um produto?', conteudo: 'Sim, você tem até 7 dias para pedir a troca. Lorem ipsum dolor sit amet.' },
  { titulo: 'Quais as formas de pagamento?', conteudo: 'Cartão de crédito, boleto e Pix.' },
];

const abasPerfil = [
  { titulo: 'Dados', conteudo: 'Nome: João da Silva. E-mail: joao@email.com' },
  { titulo: 'Pedidos', conteudo: 'Você ainda não fez nenhum pedido.' },
  { titulo: 'Endereço', conteudo: 'Rua Exemplo, 123 - Salvador, BA' },
];

function App() {
  const { mostrarToast } = useToast();
  const [pagina, setPagina] = useState(1);
  const [progresso, setProgresso] = useState(0);
  const [idioma, setIdioma] = useState('Português');

  const totalPaginas = Math.ceil(produtos.length / porPagina);
  const produtosDaPagina = produtos.slice((pagina - 1) * porPagina, pagina * porPagina);

  // simula um upload aumentando a barra de 10 em 10
  function iniciarUpload() {
    setProgresso(0);
    let valor = 0;
    const intervalo = setInterval(() => {
      valor += 10;
      setProgresso(valor);
      if (valor >= 100) {
        clearInterval(intervalo);
        mostrarToast('Upload concluído com sucesso!', 'sucesso');
      }
    }, 300);
  }

  function escolherIdioma(opcao) {
    setIdioma(opcao);
    mostrarToast(`Idioma alterado para ${opcao}`, 'info');
  }

  return (
    <>
      <header className="cabecalho">
        <h1>Minha Loja</h1>
        <MenuSuspenso titulo={idioma} opcoes={['Português', 'Inglês', 'Espanhol']} onSelecionar={escolherIdioma} />
      </header>

      <main className="container">
        <section className="card">
          <h2>Produtos</h2>
          <ul className="produtos">
            {produtosDaPagina.map((produto) => (
              <li key={produto}>
                <span>{produto}</span>
                <button onClick={() => mostrarToast(`${produto} adicionado ao carrinho`, 'sucesso')}>
                  Comprar
                </button>
              </li>
            ))}
          </ul>
          <Paginacao totalPaginas={totalPaginas} paginaAtual={pagina} onMudarPagina={setPagina} />
        </section>

        <section className="card">
          <h2>Upload de arquivo</h2>
          <BarraProgresso valor={progresso} />
          <div className="botoes">
            <button onClick={iniciarUpload} disabled={progresso > 0 && progresso < 100}>
              Enviar arquivo
            </button>
            <button onClick={() => mostrarToast('Erro ao salvar o arquivo!', 'erro')}>Simular erro</button>
          </div>
        </section>

        <section className="card">
          <h2>Meu perfil</h2>
          <Abas abas={abasPerfil} />
        </section>

        <section className="card">
          <h2>Perguntas frequentes</h2>
          <Acordeao itens={perguntas} />
        </section>
      </main>
    </>
  );
}

export default App;
