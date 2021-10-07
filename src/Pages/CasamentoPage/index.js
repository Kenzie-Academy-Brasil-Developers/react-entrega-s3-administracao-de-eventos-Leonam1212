import ListaDeBebidas from "../../Components/Card";
import Navbar from "../../Components/NavBar";
import Subheader from "../../Components/SubHeader";
import { useContext } from "react";
import { CasamentoContext } from "../../Providers/Casamento";
import { SemProdutos } from "./style";
import { RiEmotionSadFill } from "react-icons/ri";
const Casamento = () => {
  const { bebidaCasamento } = useContext(CasamentoContext);
  return (
    <>
      <Navbar />
      <Subheader />
      {bebidaCasamento.length === 0 ? (
        <SemProdutos>
          <RiEmotionSadFill />
          Não há produtos nessa seção!!
        </SemProdutos>
      ) : (
        <ListaDeBebidas tipo="casamento" />
      )}
    </>
  );
};
export default Casamento;
