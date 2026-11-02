import { useEffect, useRef, useState } from 'react';

function MenuSuspenso({ titulo, opcoes, onSelecionar }) {
  const [aberto, setAberto] = useState(false);
  const menuRef = useRef(null);

  // fecha o menu quando clicar fora dele
  useEffect(() => {
    function clicouFora(evento) {
      if (menuRef.current && !menuRef.current.contains(evento.target)) {
        setAberto(false);
      }
    }
    document.addEventListener('click', clicouFora);
    return () => document.removeEventListener('click', clicouFora);
  }, []);

  function escolher(opcao) {
    onSelecionar(opcao);
    setAberto(false);
  }

  return (
    <div className="menu" ref={menuRef}>
      <button onClick={() => setAberto(!aberto)} aria-expanded={aberto} aria-haspopup="true">
        {titulo} ▾
      </button>
      {aberto && (
        <ul className="menu-lista">
          {opcoes.map((opcao) => (
            <li key={opcao}>
              <button onClick={() => escolher(opcao)}>{opcao}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MenuSuspenso;
