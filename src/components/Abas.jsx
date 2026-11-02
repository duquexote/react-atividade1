import { useState } from 'react';

function Abas({ abas }) {
  const [abaAtiva, setAbaAtiva] = useState(0);

  return (
    <div>
      <div className="abas-titulos" role="tablist">
        {abas.map((aba, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={abaAtiva === index}
            className={abaAtiva === index ? 'ativa' : ''}
            onClick={() => setAbaAtiva(index)}
          >
            {aba.titulo}
          </button>
        ))}
      </div>
      <div className="abas-conteudo" role="tabpanel">
        <p>{abas[abaAtiva].conteudo}</p>
      </div>
    </div>
  );
}

export default Abas;
