import styled from "styled-components";

export const Background = styled.div`
  height: 130vh;
  width: 100%;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  :before {
    content: "";
    position: fixed;
    left: 0;
    right: 0;
    top: 1;
    z-index: -1;
    display: block;
    width: 100%;
    height: 120vh;
    background: url("https://images3.alphacoders.com/207/207169.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
   
    /* filter: grayscale(0.4); */
    filter: blur(5px);
  }
`;
