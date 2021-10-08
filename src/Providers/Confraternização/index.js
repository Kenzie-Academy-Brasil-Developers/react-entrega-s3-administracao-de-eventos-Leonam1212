import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const ConfraternizacaoContext = createContext([]);

export const ConfraternizacaoProvider = ({ children }) => {
  const confraternizacao = JSON.parse(localStorage.getItem("confraternizacao")) || [];
  const [bebidaConfraternizacao, setBebidaConfraternizacao] =
    useState(confraternizacao);

  const adicionarBebidaConfraternizacao = (item) => {
    if (!bebidaConfraternizacao.includes(item)) {
      confraternizacao.push(item);
      localStorage.setItem(
        "confraternizacao",
        JSON.stringify(confraternizacao)
      );
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
    localStorage.setItem("confraternizacao", JSON.stringify(novaLista));
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
