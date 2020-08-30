import Head from 'next/head';
import Header from './header';

const MainLayout = ({ children }) => (
  <>
    <Head>
      <title>{'Maison\'s playground'}</title>
      <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
      <link href="/static/css/styles.css" rel="stylesheet" />
    </Head>
    <div className="mainLayout_container">
      <Header />
      <div className="container">
        {children}
      </div>
    </div>
  </>
);

export default MainLayout;
