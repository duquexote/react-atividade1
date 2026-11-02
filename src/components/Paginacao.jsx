function Paginacao({ totalPaginas, paginaAtual, onMudarPagina }) {
  const paginas = [];
  for (let i = 1; i <= totalPaginas; i++) {
    paginas.push(i);
  }

  return (
    <nav className="paginacao" aria-label="Paginação">
      <button onClick={() => onMudarPagina(paginaAtual - 1)} disabled={paginaAtual === 1}>
        Anterior
      </button>

      {paginas.map((numero) => (
        <button
          key={numero}
          onClick={() => onMudarPagina(numero)}
          className={numero === paginaAtual ? 'ativa' : ''}
          aria-current={numero === paginaAtual ? 'page' : undefined}
        >
          {numero}
        </button>
      ))}

      <button onClick={() => onMudarPagina(paginaAtual + 1)} disabled={paginaAtual === totalPaginas}>
        Próxima
      </button>
    </nav>
  );
}

export default Paginacao;
