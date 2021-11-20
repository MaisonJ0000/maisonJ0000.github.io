import { css } from '@emotion/react';

const headerStyle = css`
  padding: 10px;
  backgroundColor: rgba(0, 0, 0, 0.4);
  header {
    .navbar__brand {
      color: #000;
      font-family: Zen Tokyo Zoo;
      font-size: 30px;
      font-weight: 900;
      text-decoration: none;
    }
  }
  nav {
    a {
      font-size: 20px;
      color: #000;
      padding: 0 0 0 10px;
    }
    
  }
`;

export default headerStyle;
