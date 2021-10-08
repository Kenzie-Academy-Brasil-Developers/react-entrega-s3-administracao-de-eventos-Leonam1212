import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const FormaturaContext = createContext([]);

export const FormaturaProvider = ({ children }) => {
  const formatura = JSON.parse(localStorage.getItem("formatura")) || [];
  const [bebidaFormatura, setBebidaFormatura] = useState(formatura);

  const adicionarBebidaFormatura = (item) => {
    if (!bebidaFormatura.includes(item)) {
      formatura.push(item);
      localStorage.setItem("formatura", JSON.stringify(formatura));
      setBebidaFormatura([...bebidaFormatura, item]);
    }
    if (bebidaFormatura.includes(item)) {
      toast.error("Item já foi adicionado!!");
    }
  };

  console.log(bebidaFormatura);
  const removerBebidaFormatura = (item) => {
    const novaLista = bebidaFormatura.filter(
      (element) => element.id !== item.id
    );
    localStorage.setItem("formatura", JSON.stringify(novaLista));
    setBebidaFormatura(novaLista);
  };

  return (
    <FormaturaContext.Provider
      value={{
        bebidaFormatura,
        adicionarBebidaFormatura,
        removerBebidaFormatura,
      }}
    >
      {children}
    </FormaturaContext.Provider>
  );
};
