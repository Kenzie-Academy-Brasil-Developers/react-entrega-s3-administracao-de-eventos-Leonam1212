import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home/index";
import Catalogo from "./../Pages/Catalogo/index";
import Casamento from "../Pages/CasamentoPage/index";
import Formatura from "../Pages/FormaturaPage/index";
import Confraternizacao from "../Pages/ConfraternizacaoPage/index"
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/drinks">
        <Catalogo />
      </Route>
      <Route path="/casamento">
        <Casamento />
      </Route>
      <Route path="/formatura">
        <Formatura />
      </Route>
      <Route path = "/confraternizacao">
        <Confraternizacao />
      </Route>
    </Switch>
  );
};
export default Routes;
