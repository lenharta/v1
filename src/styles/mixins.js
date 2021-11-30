import { css } from 'styled-components';

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  flexEnd: css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `,

  flexStart: css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `,

  smallButton: css`
    cursor: pointer;
    margin: 0;
    padding: 7.5px 15px;
    border-radius: var(--border-radius);
    border: var(--btn-border);
    background: none;
    color: var(--dark-orange);
    font-family: var(--font-link);
    a {
      color: var(--orange);
    }

    &:hover {
      background-color: var(--orange-tint);
      transition: var(--transiton);
    }
  `,

  bgHeading: css`
    margin: 0;
    /* font-size: clamp(60px, 8vw, 80px); */
    font-family: var(--font-heading);
    font-weight: 700;
  `,

  mdHeading: css`
    color: var(--text);
    margin: 0;
    font-size: clamp(40px, 8vw, 60px);
    font-family: var(--font-heading);
    font-weight: 700;
  `,
};

export default mixins;