import axios from 'axios';
import Link from 'next/link';
import MainLayout from '../components/layouts/mainLayout';

const Home = ({ userData }) => {
  const renderUserList = (users) => users.map((user) => (
    <li className="list-group-item" key={user.id}>
      <Link href={{
        pathname: '/users/profile',
        query: {
          userId: user.id,
        },
      }}
      >
        <button type="button">{user.name}</button>
      </Link>
    </li>
  ));

  return (
    <MainLayout>
      {/* <h1>welcome! updated again</h1> */}
      {/* <h1>Pick a user</h1> */}
      {/* <ul className="list-group"> */}
      {/*  {renderUserList(userData)} */}
      {/* </ul> */}

      {/* <Basic>Cool Styles</Basic> */}
      {/* <Combined> */}
      {/*  With */}
      {/*  {' '} */}
      {/*  <code>:hover</code> */}
      {/*  . */}
      {/* </Combined> */}
      {/* <Animated animation={bounce}>{'Let\'s bounce.'}</Animated> */}
    </MainLayout>
  );
};

Home.getInitialProps = async () => {
  let userData;

  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    userData = response.data;
  } catch (e) {
    console.error(e);
  }
  return {
    userData,
  };
};

export default Home;
