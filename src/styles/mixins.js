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

  smButton: css`
    display: flex;
    cursor: pointer;
    border-radius: var(--border-radius);
    border: var(--btn-border);
    font-family: var(--font-link);
    color: var(--orange);
    padding: 7.5px 15px;
    &:hover {
      background-color: var(--orange-tint);
      transition: var(--transiton);
      transform: scale(var(--s-scale));
      }
  `,

  bgButton: css`
    display: flex;
    cursor: pointer;
    border-radius: var(--border-radius);
    border: var(--btn-border);
    font-family: var(--font-link);
    color: var(--orange);
    padding: 15px 70px;
    &:hover {
      background-color: var(--orange-tint);
      transition: var(--transiton);
      transform: scale(var(--s-scale));
      }
  `,

  bgHeading: css`
    margin: 0;
    font-size: clamp(60px, 8vw, 80px);
    font-family: var(--font-heading);
    font-weight: 700;
  `,

  mdHeading: css`
    margin: 0;
    font-size: clamp(35px, 5vw, 60px);
    font-family: var(--font-heading);
    font-weight: 700;
  `,

  resetList: css`
    list-style: none;
    padding: 0;
    margin: 0;
  `,
};

export default mixins;