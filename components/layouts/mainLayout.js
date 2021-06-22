import Head from 'next/head';
import Header from './header';
import MainLayoutStyle from './mainLayout.style';

const MainLayout = ({ children }) => (
  <>
    <Head>
      <title>{'MaisonJ\'s Playground'}</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto&family=Wire+One&display=swap" rel="stylesheet" />
      <link href="/static/css/styles.css" rel="stylesheet" />
    </Head>
    <div className="main-layout" css={MainLayoutStyle}>
      <Header />
      <div className="main-layout__container">
        {children}
      </div>
    </div>
  </>
);

export default MainLayout;
