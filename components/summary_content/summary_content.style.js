import values from 'styles/values.style';
import css from 'styled-jsx/css';

export default css`
/* Content Style */
  .content-left {
    flex: 2;
    padding-right: 2rem;
  }

  .content-right {
    flex: 3;
  }

  .content-title {
    margin-top: 0;
    font-size: 2rem;
    margin-bottom: 1rem;
    line-height: 2.7rem;
  }

  .summary-content {
    display: flex;
    align-content: space-between;
    border-bottom: 1px solid ${values.COLOR_VLIGHT};
    margin-bottom: 2rem;
  }
`;