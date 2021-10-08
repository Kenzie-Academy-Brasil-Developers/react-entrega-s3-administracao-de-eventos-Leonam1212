import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CasamentoContext = createContext([]);

export const CasamentoProvider = ({ children }) => {
  const [bebidaCasamento, setBebidaCasamento] = useState([]);
  const adicionarBebidaCasamento = (item) => {
    if (!bebidaCasamento.includes(item)) {
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
