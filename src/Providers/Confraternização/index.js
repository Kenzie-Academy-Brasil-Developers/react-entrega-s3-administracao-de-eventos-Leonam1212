import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const ConfraternizacaoContext = createContext([]);

export const ConfraternizacaoProvider = ({ children }) => {
  const [bebidaConfraternizacao, setBebidaConfraternizacao] = useState([]);

  const adicionarBebidaConfraternizacao = (item) => {
    if (!bebidaConfraternizacao.includes(item)) {
      setBebidaConfraternizacao([...bebidaConfraternizacao, item]);
    }
    if (bebidaConfraternizacao.includes(item)) {
      toast.error("Item já foi adicionado!!");
    }
  };

  const removerBebidaConfraternizacao = (item) => {
    const novaLista = bebidaConfraternizacao.filter(
      (element) => element.name !== item.name
    );
    setBebidaConfraternizacao(novaLista);
  };

  return (
    <ConfraternizacaoContext.Provider
      value={{
        bebidaConfraternizacao,
        adicionarBebidaConfraternizacao,
        removerBebidaConfraternizacao,
      }}
    >
      {children}
    </ConfraternizacaoContext.Provider>
  );
};
