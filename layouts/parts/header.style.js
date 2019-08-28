import css from 'styled-jsx/css';
import values from 'styles/values.style';

export default css` 
  .site-title {
    margin: 0;
  }

  .header {
    padding: 3rem 0;
    border-bottom: 4px dashed ${values.COLOR_VLIGHT};
    margin-bottom: 5rem;
  }
  
  .top-menu {
    margin-left: 2rem;
  }

  .site-title {
    font-size: 2rem;
  }

  .top-menu ul li {
    display: inline-block;
    margin-right: 1.5rem;
    font-size: 1.7rem;
    font-weight: 300;
  }

  .top-menu ul li:last-of-type {
    margin-right: 0;
  } 
`;