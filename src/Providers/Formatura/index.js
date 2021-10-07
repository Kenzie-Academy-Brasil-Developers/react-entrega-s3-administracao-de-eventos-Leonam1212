import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const FormaturaContext = createContext([]);

export const FormaturaProvider = ({ children }) => {
  const [bebidaFormatura, setBebidaFormatura] = useState([]);

  const adicionarBebidaFormatura = (item) => {
    if (!bebidaFormatura.includes(item)) {
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
