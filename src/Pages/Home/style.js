import styled from "styled-components";

export const Header = styled.div`
  font-family: "Birthstone Bounce", cursive;
  font-size: 1.5rem;
  text-align: center;
  color: var(--whiteCity);
  h3 {
    padding-bottom: 5px;
    padding-right: 3px;
    width: 90%;
    margin: 0 auto;
    text-align: right;
  }

  @media (min-width: 1100px) {
    margin-left: 30px;
    text-align: left;
    margin-top: 15px;
  }
`;
export const Container = styled.div`
  background-color: #2f2e2f;
  width: 90%;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  box-shadow: 0 7px 7px rgba(0, 0, 0, 0.35);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    @media (min-width: 1100px) {
      width: 45%;
      margin-left: 90px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    h1 {
      font-size: 2.5rem;
      text-align: center;
      width: 100%;
      margin-bottom: 40px;
      letter-spacing: 5px;
      color: var(--orange);
      @media (min-width: 1100px) {
        font-size: 5rem;
        text-align: left;
      }
    }
    p {
      margin-bottom: 40px;
      width: 80%;
      text-align: justify;
      color: var(--whiteCity);
    }

    button {
      width: 160px;
      font-size: 13px;
    }
  }
  img {
    display: none;
  }
`;

export const Background = styled.div`
  @media (min-width: 1100px) {
    flex: 1;
    img {
      display: block;
      width: 100%;
    }
  }
`;
