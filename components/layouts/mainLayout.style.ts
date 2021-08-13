import { css } from '@emotion/react';

const MainLayoutStyle = (theme: { background: string, color: string }) => css`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 80px auto;
  background: ${theme.background};
  header {
    color: red;
  }
  .main-layout__content {
    height: 100%;
    color: ${theme.color};
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
  }
  .main-layout__content__wrapper {
    max-width: 80%;
    margin: 0 auto;
  }
  .main-layout__content__wrapper.post {
    max-width: 80%;
    margin: 0 auto;
  }
  .main-layout__content.post {
    margin: auto;
    font-family: "Gowun Dodum", "Roboto Condensed", sans-serif;
    p {
      font-size: 20px;
    }
  }
`;

export default MainLayoutStyle;

const DarkMainLayoutTheme = {
  background: 'radial-gradient(circle at 80%, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8))',
  color: '#fff',
};

const LightMainLayoutTheme = {
  background: 'linear-gradient(to right, rgba(255, 255, 255, 0.9), #fff 80%, rgba(255, 255, 255, 0.9))',
  color: '#000',
};

export {
  DarkMainLayoutTheme,
  LightMainLayoutTheme,
};
