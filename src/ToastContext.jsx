import { createContext, useContext, useState } from 'react';
import Toast from './components/Toast';

// Contexto global para mostrar notificações de qualquer componente
const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  function mostrarToast(mensagem, tipo) {
    const id = Date.now() + Math.random();
    setToasts((lista) => [...lista, { id, mensagem, tipo }]);
  }

  function removerToast(id) {
    setToasts((lista) => lista.filter((t) => t.id !== id));
  }

  return (
    <ToastContext.Provider value={{ mostrarToast }}>
      {children}
      <div className="toasts" aria-live="polite">
        {toasts.map((t) => (
          <Toast key={t.id} mensagem={t.mensagem} tipo={t.tipo} onFechar={() => removerToast(t.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
