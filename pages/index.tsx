import MainLayout from "components/templates/mainLayout";
import Head from "next/head";
import Link from "next/link";

// import { fetchLastPost } from '../lib/api/post';
// import Post from '../types/post';
// import PostsPreview from '../components/elements/heroPostPreview';

const Home = () => {
  return (
    <>
      <Head>
        <title>{"MaisonJ's Playground"}</title>
      </Head>
      <MainLayout>
        <h1 className="p-1">
          <Link href=""> hi </Link>
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
