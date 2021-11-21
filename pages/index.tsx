import MainLayout from "components/templates/mainLayout";
import Head from "next/head";

// import { fetchLastPost } from '../lib/api/post';
// import Post from '../types/post';
// import PostsPreview from '../components/elements/heroPostPreview';

const Home = () => {
  return (
    <>
      <Head>
        <title>{"MaisonJ's Playground"}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Tokyo+Zoo&display=swap"
          rel="stylesheet"
        />
      </Head>
      <MainLayout>
        <h1 className="p-1">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </MainLayout>
    </>
  );
};

export default Home;

// export const getStaticProps = async () => {
//   const lastPost = fetchLastPost({
//     rootPagePath: '_posts',
//   });

//   return {
//     props: {
//       lastPost,
//     },
//   };
// };
