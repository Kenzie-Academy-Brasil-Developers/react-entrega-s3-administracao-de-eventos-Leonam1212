import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./styled";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Frontier Drinks</h1>
        </NavLink>
        <Bars />
        <NavMenu>
        <NavLink to="/drinks" activeStyle>
            Catalogo
          </NavLink>
          <NavLink to="/formatura" activeStyle>
            Formatura
          </NavLink>
          <NavLink to="/casamento" activeStyle>
            Casamento
          </NavLink>
          <NavLink to="/confraternizacao" activeStyle>
            Confraternização
          </NavLink>
          <NavLink className = "invalid" to="#" activeStyle>
            Cadastre - se
          </NavLink>
        <NavBtn>
          <NavBtnLink  to="#">Login</NavBtnLink>
        </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};
export default Navbar;
