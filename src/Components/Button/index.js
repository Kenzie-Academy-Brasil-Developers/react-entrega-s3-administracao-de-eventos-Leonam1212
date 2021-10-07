import { Container } from "./style";
import { useContext } from "react";
import { BebidasContext } from "../../Providers/Bebidas";
import { ConfraternizacaoContext } from "../../Providers/Confraternização";
import { FormaturaContext } from "../../Providers/Formatura";
import { CasamentoContext } from "../../Providers/Casamento";

const Button = ({
  children,
  blackSchema = false,
  handleClick,
  tipo,
  item,
  ...rest
}) => {
  const { bebidaCasamento, adicionarBebidaCasamento, removerBebidaCasamento } =
    useContext(CasamentoContext);

  const {
    bebidaConfraternizacao,
    adicionarBebidaConfraternizacao,
    removerConfraternizacao,
  } = useContext(ConfraternizacaoContext);

  const { bebidaFormatura, adicionarBebidaFormatura, removerBebidaFormatura } =
    useContext(FormaturaContext);


  return (
    <Container
      onClick={handleClick}
      blackSchema={blackSchema}
      type="button"
      {...rest}
    >
      {children}
    </Container>
  );
};

export default Button;
