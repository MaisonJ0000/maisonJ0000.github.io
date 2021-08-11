import { css } from '@emotion/react';

const MainLayoutStyle = css`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 80px auto;
  background: radial-gradient(circle at 80%, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8));
  header {
    color: red;
  }
  .main-layout__content {
    color: #fff;
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
  }
  .main-layout__content__wrapper.post {
    max-width: 80%;
    margin: 0 auto;
  }
  .main-layout__content.post {
    margin: auto;
    font-family: "Gowun Dodum", "Roboto Condensed", sans-serif;
    p {
      font-size: 12px;
    }
  }
`;

export default MainLayoutStyle;
