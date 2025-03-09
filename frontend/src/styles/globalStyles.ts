import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    font-family: ${theme.fonts.body};
    font-size: 16px;
    color: ${theme.colors.text};
    background-color: ${theme.colors.background};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
  }

  #root {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    transition: color ${theme.transitions.fast};

    &:hover {
      color: ${theme.colors.secondary};
    }
  }

  button {
    cursor: pointer;
    font-family: ${theme.fonts.body};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
    margin-bottom: ${theme.spacing.md};
    font-weight: 600;
    line-height: 1.2;
  }

  p {
    margin-bottom: ${theme.spacing.md};
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul, ol {
    list-style-position: inside;
    margin-bottom: ${theme.spacing.md};
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    html, body {
      font-size: 15px;
    }
  }
  
  @media (max-width: ${theme.breakpoints.sm}) {
    html, body {
      font-size: 14px;
    }
  }
`; 