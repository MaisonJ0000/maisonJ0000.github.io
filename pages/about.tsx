import GithubLogo from 'component/atom/Svg/GithubLogo';
import LinkedinLogo from 'component/atom/Svg/LinkedinLogo';
import MailLogo from 'component/atom/Svg/MailLogo';
import MainLayout from 'component/template/mainLayout';
import Image from 'next/image';
import React from 'react';

interface IItemProps {
  logo?: React.ReactNode;
  name: string;
  value: string;
  isLinkValue?: boolean;
}
const Item = (props: IItemProps) => {
  const { logo, name, value, isLinkValue } = props;
  return (
    <li className="py-40 px-0 flex-none flex-[1_1_100%] sm:px-40 flex items-center">
      <span className="w-40 outline-none flex pr-0 sm:pr-30">{logo}</span>
      <span className="uppercase col-sp w-400 font-bold text-20 sm:text-3xl font-montserrat">
        {name}
      </span>
      {isLinkValue ? (
        <a className="sm:text-xl underline hover:text-green-600" href={value}>
          {value}
        </a>
      ) : (
        <span className="text-xl">{value}</span>
      )}
    </li>
  );
};

export default function About() {
  return (
    <MainLayout>
      <div className="text-7xl pl-40 pt-60 text-green-600">
        <span className="font-zentokyo">MaisonJ</span>
        <span className="animate-pulse-strong">:</span>
      </div>
      <div className="h-350 my-50 overflow-hidden">
        <div className="w-450 h-450 m-auto rounded-full overflow-hidden">
          <Image
            src="/profile.jpg"
            alt="Picture of me"
            width="600"
            height="450"
          />
        </div>
      </div>
      <ul className="list-none divide-y divide-gray-400 mx-10">
        <Item name="name" value="서종만/coze" />
        <Item
          logo={<MailLogo width="30" height="30" />}
          name="email"
          value="maisonj0000@gmail.com"
        />
        <Item
          logo={<GithubLogo width="30" height="30" />}
          name="github"
          value="https://github.com/MaisonJ0000"
          isLinkValue
        />
        <Item
          logo={<LinkedinLogo width="30" height="30" />}
          name="linkedin"
          value="https://www.linkedin.com/in/jongman-seo-663085175/"
          isLinkValue
        />
      </ul>
    </MainLayout>
  );
}
