import ListaDeBebidas from "../../Components/Card";
import Navbar from "../../Components/NavBar/index";
import Subheader from "../../Components/SubHeader";
import { useContext } from "react";
import { ConfraternizacaoContext } from "../../Providers/Confraternização/index";
import { SemProdutos } from "./style";
import { RiEmotionSadFill } from "react-icons/ri";
const Confraternizacao = () => {
  const { bebidaConfraternizacao } = useContext(ConfraternizacaoContext);
  return (
    <>
      <Navbar />
      <Subheader />
      {bebidaConfraternizacao.length === 0 ? (
        <SemProdutos>
          <RiEmotionSadFill />
          Não há produtos nessa seção!!
        </SemProdutos>
      ) : (
        <ListaDeBebidas tipo="confraternizacao" />
      )}
    </>
  );
};
export default Confraternizacao;
