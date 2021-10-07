import styled from "styled-components";

export const SemProdutos = styled.div`
  background: rgba(0, 0, 0, 0.45);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.5rem;
  width: 95%;
  max-width: 500px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  height: 150px;
  font-size: 26px;
  padding: 15px;
  text-align: center;
  color: #fff;
  text-transform:uppercase;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);

  svg {
    font-size: 66px;
    color: var(--orange);
    margin-right: 10px;
  }
`;
