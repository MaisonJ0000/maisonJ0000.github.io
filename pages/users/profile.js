import axios from 'axios';

const Profile = ({ user }) => {
  const showUser = () => (
    <div>
      <div>
        Name:
        {user.name}
      </div>
    </div>
  );

  return (
    <>
      <h1>
        {showUser()}
      </h1>
    </>
  );
};

Profile.getInitialProps = async ({ query }) => {
  let user;

  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${query.userId}`);
    user = response.data;
  } catch (e) {
    console.error(e);
  }
  return { user };
};

export default Profile;
