import { css, Global } from '@emotion/core';

const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        margin: 0;
        min-height: 100%;
        height: 100%;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 24px;
        color: #fff;
      }
      div#__next {
        height: 100%;
      }
      header {
        color: red;
      }
      .bgWrap {
        position: fixed;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        z-index: -1;
      }
      
      .hover-underline {
        
      }
    `}
  />
);

export default globalStyles;
