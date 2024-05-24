import {
  FaGithubSquare,
  FaInstagramSquare,
  FaLastfmSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { SiTrakt } from "react-icons/si";
import QuickLink from "./QuickLink";

export function QuickLinkSection() {
  const SignPosts = [
    {
      href: "https://github.com/PaiJi",
      primaryColor: "#000000",
      icon: <FaGithubSquare />,
    },
    {
      href: "https://twitter.com/jipairamen",
      primaryColor: "#1DA1F2",
      icon: <FaTwitterSquare />,
    },
    {
      href: "https://www.instagram.com/jipai16/",
      primaryColor: "#E1306C",
      icon: <FaInstagramSquare />,
    },
    {
      href: "https://trakt.tv/users/jipai",
      primaryColor: "#d62b20",
      icon: <SiTrakt />,
    },
    {
      href: "https://www.last.fm/user/jipai",
      primaryColor: "#d92323",
      icon: <FaLastfmSquare />,
    },
    {
      href: "http://bgm.tv/user/338144",
      primaryColor: "#F09199",
      icon: <img src="https://bgm.tv/img/ico/bgm_banner.gif" />,
    },
  ];

  return (
    <>
      {SignPosts.map(({ href, primaryColor, icon }) => (
        <QuickLink href={href} primaryColor={primaryColor} icon={icon} />
      ))}
    </>
  );
}
