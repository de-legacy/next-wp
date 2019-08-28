import values from './values.style';
import css from 'styled-jsx/css';

export default css.global`
  *, ::before, ::after {

      box-sizing: border-box;
      font-kerning: normal;

  }

  html {
    font-size: 10px;
  }

  body {
    font-family: ${values.MAIN_FONT_FAMILY};
    margin: 0;
    font-size: 1.65rem;
    line-height: 2.5rem;
  }
   
  p {
    line-height: 3rem;
    margin-top: 0;
  }

  a {
    text-decoration: none;
    color: ${values.COLOR_DARK};
  }

  a:hover, a:focus {
    color: ${values.COLOR_ACCENT};
    transition: color .2s ease;
  }

  .wrapper {
    max-width: 80%;
    margin: 0 auto;
  }
  
  .header {
    display: flex;
    align-items: center;
  }

  .flat-list ul {
    padding: 0;
    margin: 0;
  }

  .flat-list ul li {
    list-style: none;
  }
`;