import Button from "../Button";
import { useContext } from "react";
import { BebidasContext } from "../../Providers/Bebidas";
import { CasamentoContext } from "../../Providers/Casamento";
import { ConfraternizacaoContext } from "../../Providers/Confraternização";
import { FormaturaContext } from "../../Providers/Formatura";
import { Container, Card } from "./style";
import { FaGraduationCap, FaRegHeart, FaTrashAlt } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import { toast } from "react-toastify";
const ListaDeBebidas = ({ tipo }) => {
  const { bebidas } = useContext(BebidasContext);
  const { bebidaCasamento, adicionarBebidaCasamento, removerBebidaCasamento } =
    useContext(CasamentoContext);
  const {
    bebidaConfraternizacao,
    adicionarBebidaConfraternizacao,
    removerBebidaConfraternizacao,
  } = useContext(ConfraternizacaoContext);
  const { bebidaFormatura, adicionarBebidaFormatura, removerBebidaFormatura } =
    useContext(FormaturaContext);

  const despacharṔaraCasamento = (item) => {
    adicionarBebidaCasamento(item);
    if (!bebidaCasamento.includes(item)) {
      toast.success("Item foi adicionado na sessão Casamento ");
    }
  };
  const despacharParaFormatura = (item) => {
    adicionarBebidaFormatura(item);
    if (!bebidaFormatura.includes(item)) {
      toast.success("Item foi adicionado na sessão Formatura ");
    }
  };
  const despacharParaConfraternizacao = (item) => {
    adicionarBebidaConfraternizacao(item);
    if (!bebidaConfraternizacao.includes(item)) {
      toast.success("Item foi adicionado na sessão Confraternização ");
    }
  };

  const removerItemFormatura = (item) => {
    removerBebidaFormatura(item);
    toast.error("Item foi removido na sessão Formatura ");
  };

  const removerItemCasamento = (item) => {
    removerBebidaCasamento(item);
    toast.error("Item foi removido na sessão Casamento ");
  };
  const removerItemConfraternizacao = (item) => {
    removerBebidaConfraternizacao(item);
    toast.error("Item foi removido na sessão Confraternização ");
  };

  return (
    <Container>
      {tipo === "bebidas" && <h1>Catálogo</h1>}
      {tipo === "casamento" && <h1>Casamento</h1>}
      {tipo === "formatura" && <h1>Formatura</h1>}
      {tipo === "confraternizacao" && <h1>Confraternização</h1>}
      {/* Preciso de um tipo para adicionar a 3 componentes diferentes  */}
      {tipo === "bebidas" &&
        bebidas.map((item, index) => (
          <Card key={index}>
            <img src={item.image_url} alt={item.name} />
            <h2>
              {item.name} - {item.volume.value}L
            </h2>
            <details>
              <sumary></sumary>
              <span>{item.description}</span>
            </details>
            <span>Fabricação: {item.first_brewed}</span>
            <div>
              <Button
                title="Casamento"
                blackSchema
                handleClick={() => despacharṔaraCasamento(item)}
                item={item}
              >
                <FaRegHeart />
              </Button>
              <Button
                title="Formatura"
                blackSchema
                handleClick={() => despacharParaFormatura(item)}
                item={item}
              >
                <FaGraduationCap />
              </Button>
              <Button
                title="Confraternização"
                blackSchema
                handleClick={() => despacharParaConfraternizacao(item)}
                item={item}
              >
                <GiPartyPopper />
              </Button>
            </div>
          </Card>
        ))}

      {/* Daqui para baixo o tipo será para remover */}
      {tipo === "casamento" &&
        bebidaCasamento.map((item, index) => (
          <Card key={index}>
            <img src={item.image_url} alt={item.name} />
            <h2>
              {item.name} <span>{item.volume.value}L</span>
            </h2>
            <details>
              <sumary></sumary>
              <span>{item.description}</span>
            </details>
            <span>Fabricação: {item.first_brewed}</span>
            <Button
              title="Remover"
              blackSchema
              handleClick={() => removerItemCasamento(item)}
              item={item}
            >
              <FaTrashAlt />
            </Button>
          </Card>
        ))}
      {tipo === "confraternizacao" &&
        bebidaConfraternizacao.map((item, index) => (
          <Card key={index}>
            <img src={item.image_url} alt={item.name} />
            <h2>
              {item.name} <span>{item.volume.value}L</span>
            </h2>
            <details>
              <sumary></sumary>
              <span>{item.description}</span>
            </details>
            <span>Fabricação: {item.first_brewed}</span>
            <Button
              title="Remover"
              blackSchema
              handleClick={() => removerItemConfraternizacao(item)}
              item={item}
            >
              <FaTrashAlt />
            </Button>
          </Card>
        ))}

      {tipo === "formatura" &&
        bebidaFormatura.map((item, index) => (
          <Card key={index}>
            <img src={item.image_url} alt={item.name} />
            <h2>
              {item.name} <span>{item.volume.value}L</span>
            </h2>
            <details>
              <sumary></sumary>
              <span>{item.description}</span>
            </details>
            <span>Fabricação: {item.first_brewed}</span>
            <Button
              title="Remover"
              blackSchema
              handleClick={() => removerItemFormatura(item)}
              item={item}
            >
              <FaTrashAlt />
            </Button>
          </Card>
        ))}
    </Container>
  );
};
export default ListaDeBebidas;
