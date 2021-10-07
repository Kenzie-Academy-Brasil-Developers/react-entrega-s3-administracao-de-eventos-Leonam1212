import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    :root {
        --whiteCity: #dfe6e9;
        --white: #f5f5f5;
        --black: #0c0d0d;
        --orange:#ffc048;
        --EletromagneticColor: #2f3640;
        --background: #1c1c1c;
    }
    body {
        font-family: 'Raleway', sans-serif;
        background: var(--background);
    }
    
    body, input, button {
        font-family: 'Open Sans Condensed', sans-serif;
        font-size: 1rem;
    }
    h1,h2,h3,h4,h5,h6 {
        font-family: 'Bebas Neue', cursive;
        font-weight: bold;
    }
    button {
        cursor: pointer;
    }
    a {
        text-decoration: none;
    }
`