import { BebidasProvider } from "./Bebidas";
import { FormaturaProvider } from "./Formatura";
import { CasamentoProvider } from "./Casamento";
import { ConfraternizacaoProvider } from "./Confraternização";
const Providers = ({ children }) => {
  return (
    <BebidasProvider>
      <FormaturaProvider>
        <CasamentoProvider>
          <ConfraternizacaoProvider>{children}</ConfraternizacaoProvider>
        </CasamentoProvider>
      </FormaturaProvider>
    </BebidasProvider>
  );
};
export default Providers;
