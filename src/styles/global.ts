import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --blue: #3B4CCA;
        --yellow: #FFDE00;
        --dark-yellow: #B3A125;
        --red: #FF0000;
        --dark-red: #CC0000;
        --background: #f2f2f2;
        --grass: #78c850;
        --fire: #f08030;
        --water: #6890f0;
        --bug: #a8b820;
        --normal: #a8a878;
        --poison: #a040a0;
        --eletric: #f8d030;
        --ground: #e0c068;
        --fairy: #ee99ac;
        --fighting: #c03028;
        --psychic: #f85888;
        --rock: #b8a038;
        --ghost: #705898;
        --ice: #98d8d8;
        --dragon: #7038f8;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        background-color: var(--background);
    }

    body, input, textarea, button {
        font-family: 'Rubik', sans-serif;
        font-weight: 400;
    }

    h1, h1, h3, h4, h5, h6, strong {
        font-weight: 600;
    }
    
    button {
        cursor: pointer;
    }
`;