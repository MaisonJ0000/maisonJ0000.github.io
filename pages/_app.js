import globalStyles from '../components/global.style';

const App = ({ Component, pageProps }) => (
  <>
    {globalStyles}
    <Component {...pageProps} />
  </>
);

export default App;
