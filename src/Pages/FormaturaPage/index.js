import { RiEmotionSadFill } from "react-icons/ri";
import ListaDeBebidas from "../../Components/Card";
import Navbar from "../../Components/NavBar/index";
import Subheader from "../../Components/SubHeader";
import { SemProdutos } from "./style";
import { useContext } from "react";
import { FormaturaContext } from "../../Providers/Formatura/index";
const Formatura = () => {
  const { bebidaFormatura } = useContext(FormaturaContext);
  return (
    <>
      <Navbar />
      <Subheader />
      {bebidaFormatura.length === 0 ? (
        <SemProdutos>
          <RiEmotionSadFill />
          Não há produtos nessa seção!!
        </SemProdutos>
      ) : (
        <ListaDeBebidas tipo="formatura" />
      )}
    </>
  );
};
export default Formatura;
