const MainLayoutStyle = {
  minHeight: '100vh',
  display: 'grid',
  gridTemplateRows: '80px auto',
  background: 'radial-gradient(circle at 80%, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8))',
  header: {
    color: 'red',
  },
  '.main-layout__content': {
    color: '#fff',
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    alignItems: 'center',
  },
};

export default MainLayoutStyle;
