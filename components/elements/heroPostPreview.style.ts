import { css } from '@emotion/react';

const heroPostStyle = css`
  margin-left: 20%;
  .new-badge {
    font-size: 15px;
    background: linear-gradient(90deg,#ed6292 25%,#ed5760 87.5%);
    padding: 0px 5px;
    border-radius: 3px;
  }
  .link__container {
    text-decoration: none;
    font-family: "Gowun Dodum", "Roboto Condensed", sans-serif;
    color: #000;
    h1 {
      font-size: 50px;
      line-height: 55px;
      margin-top: 0;
    },
  }
  .link__container:hover h1 {
    text-decoration: underline;
  }
`;

export default heroPostStyle;
