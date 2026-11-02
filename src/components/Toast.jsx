import { useEffect } from 'react';

function Toast({ mensagem, tipo, onFechar }) {
  // fecha sozinho depois de 3 segundos
  useEffect(() => {
    const timer = setTimeout(onFechar, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`toast ${tipo}`} role="status">
      <span>{mensagem}</span>
      <button onClick={onFechar} aria-label="Fechar notificação">
        ×
      </button>
    </div>
  );
}

export default Toast;
