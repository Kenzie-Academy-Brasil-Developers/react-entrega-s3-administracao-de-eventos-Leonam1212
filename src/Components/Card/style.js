import styled from "styled-components";

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.6);
  border-radius: 0.5rem;
  width: 95%;
  max-width: 1050px;
  margin: -650px auto;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  align-items: flex-start;
  text-align: center;
  justify-content: space-evenly;

  h1 {
    width: 95%;
    color: var(--whiteCity);
    padding: 20px;
  }
`;
export const Card = styled.div`
  width: 85%;
  max-width: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0.5rem;
  padding: 1rem;
  background: var(--whiteCity);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 3);
  text-shadow: 0 3px 2px rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;

  :hover {
    opacity: 0.9;
  }

  h2 {
    margin-top: 1rem;
    font-size: 16px;
  }
  div {
    display: flex;
    justify-content: space-evenly;
    width: 100%;

    div {
      text-shadow: 0 4px 4px rgba(0, 0, 0, 3);
      width: 35%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  button {
    width: 100%;
    max-width: 50px;
    border: none;
    color: var(--orange);
  }
  img {
    width: 36%;
    height: 225px;
    @media (min-width: 1100px) {
    }
  }
  span {
    font-size: 10px;
  }
  details {
    text-align: center;
    margin-bottom: 1rem;
    font-size: 13px;
    cursor: pointer;
  }
`;
