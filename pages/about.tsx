import GithubLogo from "components/atoms/Svgs/githubLogo";
import LinkedinLogo from "components/atoms/Svgs/linkedinLogo";
import MailLogo from "components/atoms/Svgs/mailLogo";
import MainLayout from "components/templates/mainLayout";
import Image from "next/image";
import profilePic from "public/profile.jpg";

export default function About() {
  return (
    <MainLayout>
      <div className="text-7xl ml-8 mt-12 text-green-600">
        <span className="font-zentokyo">MaisonJ</span>
        <span className="animate-pulse-strong">:</span>
      </div>
      <div className="h-64 overflow-hidden">
        <div className="w-96 h-96 m-auto rounded-full overflow-hidden">
          <Image src={profilePic} alt="Picture of me" />
        </div>
      </div>
      <ul className="list-none divide-y divide-gray-400 mx-10">
        <li className="p-4 flex items-baseline">
          <span className="w-8 pr-3">
            <MailLogo />
          </span>
          <span className="uppercase font-bold text-4xl w-1/3">email</span>
          <span className="text-xl">maisonj0000@gmail.com</span>
        </li>
        <li className="p-4 flex items-baseline">
          <span className="w-8 pr-3">
            <GithubLogo />
          </span>
          <span className="uppercase font-bold text-4xl w-1/3">github</span>
          <span className="text-xl">https://github.com/MaisonJ0000</span>
        </li>
        <li className="p-4 flex items-baseline">
          <span className="w-8 pr-3">
            <LinkedinLogo />
          </span>
          <span className="uppercase font-bold text-4xl w-1/3">linkedin</span>
          <span className="text-xl">
            https://www.linkedin.com/in/jongman-seo-663085175/
          </span>
        </li>
      </ul>
    </MainLayout>
  );
}
