import MainLayout from 'component/template/mainLayout';
import Image from 'next/image';
import GithubLogo from 'component/atom/Svg/GithubLogo';
import StoryBookLogo from 'component/atom/Svg/StoryBookLogo';

// import { fetchLastPost } from '../lib/api/post';
// import Post from '../types/post';
// import PostsPreview from '../component/elements/heroPostPreview';

interface IProps {
  lastPosts: any[];
}

// Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
const keyStr =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

const triplet = (e1: any, e2: any, e3: any) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

const Home = ({ lastPosts }: IProps) => {
  return (
    <MainLayout>
      <div className="relative w-full opacity-[0.9]">
        <Image
          src="/playground.jpg"
          alt="main concept: playground"
          width="600"
          height="250"
          layout="responsive"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={rgbDataURL(120, 144, 80)}
          priority
        />

        <div className="absolute top-0 w-full h-full animate-shine-block flex items-end">
          <div className="h-1/2 w-1/3 mx-auto flex items-center justify-center gap-20">
            <a
              className="opacity-[0.9] hover:animate-spin bg-white rounded-full w-30 lg:w-50 h-30 lg:h-50 flex items-center justify-center"
              href="https://github.com/MaisonJ0000/maisonj0000.github.io"
              target="_blank"
              rel="noreferrer"
            >
              <GithubLogo width="30" height="30" />
            </a>
            <a
              className="opacity-[0.9] hover:animate-spin bg-white rounded-full w-30 lg:w-50 h-30 lg:h-50 flex items-center justify-center"
              href="https://maisonj0000.github.io/storybook"
              target="_blank"
              rel="noreferrer"
            >
              <StoryBookLogo />
            </a>
          </div>
        </div>
      </div>
      <ol>
        {/*{lastPosts.map(post => {*/}
        {/*  return (*/}
        {/*    <li key={Math.random()} className="p-20">*/}
        {/*      aaaaa*/}
        {/*    </li>*/}
        {/*  );*/}
        {/*})}*/}
      </ol>
      {/*<div>more</div>*/}
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
