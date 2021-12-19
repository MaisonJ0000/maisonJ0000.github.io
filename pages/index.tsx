import MainLayout from 'component/template/mainLayout';
import Head from 'next/head';
import Image from 'next/image';
import LinkTo from 'component/atom/Link/LinkTo';
import FlagLink from 'component/atom/Link/FlagLink';

// import { fetchLastPost } from '../lib/api/post';
// import Post from '../types/post';
// import PostsPreview from '../component/elements/heroPostPreview';

interface IProps {
  lastPosts: any[];
}

const Home = ({ lastPosts }: IProps) => {
  console.log('[COZE_LOG] lastPosts', lastPosts);
  return (
    <MainLayout>
      <div className="relative w-full p-5">
        <div className="relative w-2/3 m-auto ">
          <div className="opacity-[.9] rounded-md overflow-hidden">
            <Image
              src="/playground.jpg"
              alt="main concept: playground"
              width="600"
              height="250"
              layout="responsive"
              objectFit="cover"
              placeholder="blur"
              priority
            />
          </div>
          <div className="absolute top-0 w-full h-full animate-shine-block flex items-end rounded-sm">
            <h1 className="text-[12px] sm:text-base lg:text-2xl ml-auto mr-2 h-1/3 text-[#e2f9e3]">
              MaisonJ (혹은 Coze) 의 기술블로그입니다.
            </h1>
            <div className="absolute left-full top:0 sm:top-1/2 lg:top-2/3 grid font-montserrat text-sm lg:text-base font-bold gap-1 sm:gap-4">
              <FlagLink href="https://github.com/MaisonJ0000/maisonj0000.github.io">
                github
              </FlagLink>
              <FlagLink href="https://maisonj0000.github.io/storybook">
                storybook
              </FlagLink>
            </div>
          </div>
        </div>
      </div>
      <ol>
        {lastPosts.map(post => {
          return (
            <li key={Math.random()} className="p-20">
              aaaaa
            </li>
          );
        })}
      </ol>
      <div>more</div>
    </MainLayout>
  );
};

export default Home;

export const getStaticProps = async () => {
  const lastPosts = [{ a: 1 }, { a: 1 }, { a: 1 }, { a: 1 }];
  return {
    props: {
      lastPosts,
    },
  };
};
