import axios from 'axios';
import Link from 'next/link';
import MainLayout from '../components/layouts/mainLayout';
import {
  Basic, Combined, Animated, bounce,
} from '../styles/globalStyle';

const Home = ({ userData }) => {
  const renderUserList = (users) => users.map((user, i) => (
    <li className="list-group-item" key={i}>
      <Link href={{
        pathname: '/users/profile',
        query: {
          userId: user.id,
        },
      }}
      >
        <a>{user.name}</a>
      </Link>
    </li>
  ));

  return (
    <MainLayout>
      <h1>welcome</h1>
      <h1>Pick a user</h1>
      <ul className="list-group">
        {renderUserList(userData)}
      </ul>

      <Basic>Cool Styles</Basic>
      <Combined>
        With
        {' '}
        <code>:hover</code>
        .
      </Combined>
      <Animated animation={bounce}>Let's bounce.</Animated>
    </MainLayout>
  );
};

Home.getInitialProps = async ({
  // eslint-disable-next-line no-unused-vars
  req, res, match, history, location, ...ctx
}) => {
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
