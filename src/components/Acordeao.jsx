import { useState } from 'react';

function Acordeao({ itens }) {
  const [aberto, setAberto] = useState(null);

  function alternar(index) {
    // se clicar no que já está aberto, fecha
    setAberto(aberto === index ? null : index);
  }

  return (
    <div className="acordeao">
      {itens.map((item, index) => (
        <div key={index} className="acordeao-item">
          <button
            className="acordeao-titulo"
            onClick={() => alternar(index)}
            aria-expanded={aberto === index}
            aria-controls={`resposta-${index}`}
          >
            {item.titulo}
            <span>{aberto === index ? '−' : '+'}</span>
          </button>
          <div id={`resposta-${index}`} className={`acordeao-conteudo ${aberto === index ? 'aberto' : ''}`}>
            <p>{item.conteudo}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Acordeao;
