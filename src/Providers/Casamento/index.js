import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CasamentoContext = createContext([]);

export const CasamentoProvider = ({ children }) => {
  const casamento = JSON.parse(localStorage.getItem('casamento')) || [];
  const [bebidaCasamento, setBebidaCasamento] = useState(casamento);
  const adicionarBebidaCasamento = (item) => {
    
    if (!bebidaCasamento.includes(item)) {
      casamento.push(item)
      localStorage.setItem('casamento', JSON.stringify(casamento))
      setBebidaCasamento([...bebidaCasamento, item]);
    }
    if (bebidaCasamento.includes(item)) {
      toast.error("Item já foi adicionado!!");
    }
  };

  const removerBebidaCasamento = (item) => {
    const novaLista = bebidaCasamento.filter(
      (element) => element.id !== item.id
    );
    localStorage.setItem('casamento', JSON.stringify(novaLista))
    setBebidaCasamento(novaLista);
  };

  return (
    <CasamentoContext.Provider
      value={{
        bebidaCasamento,
        adicionarBebidaCasamento,
        removerBebidaCasamento,
      }}
    >
      {children}
    </CasamentoContext.Provider>
  );
};
