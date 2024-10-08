import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Helkem",
  initials: "H",
  url: "https://helkem.vercel.app/",

  description: "Focused on Web3.",
  summary:
    "Expertise in React, Next.js, Typescript, Ethers.js, and smart contract interactions along with UI/UX design skills. Passionate about driving Web3 adoption through intuitive user experiences and innovative product design. Worked with teams @3xcalibur @Dinero. ",
  avatarUrl: "/helkem.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Vite",
    "Ethers.js",
    "Wagmi",
    "Viem",
    "Solana-Web3.js",
    "HTML5",
    "CSS3",
    "SASS",
    "Tailwind CSS",
    "Material UI",
    "Bootstrap",
    "Git",
    "Figma",
    "Photoshop",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "helkemzero@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Helkem",
        icon: Icons.github,

        navbar: true,
      },

      X: {
        name: "X",
        url: "https://x.com/Helkem",
        icon: Icons.x,

        navbar: true,
      },

      Dribble: {
        name: "Dribbble",
        url: "https://dribbble.com/Helkem",
        icon: Icons.dribble,
        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  projects: [
    {
      title: "CryptoIndex",
      href: "https://cryptoindexz.vercel.app/",
      dates: "2023",
      active: true,
      description:
        "A Fullstack Web3 application to track the latest prices, marketcaps, and more for your favorite cryptocurrencies. Search from the top 100 cryptocurrencies and add favorites to your watchlist, filter by rank, marketcap, and price.  ",
      technologies: [
        "React",
        "Vite",
        "Typescript",
        "TailwindCSS",
        "NodeJs",
        "ExpressJS",
        "Shadcn",
      ],
      links: [
        {
          type: "Website",
          href: "https://cryptoindexz.vercel.app/",
          icon: <Icons.globe className='size-3' />,
        },
        {
          type: "Source",
          href: "https://github.com/Helkem/CryptoIndex",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: "/cryptoindex.png",
    },
    {
      title: "ZeroXNfts",
      href: "https://zeroxnft.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "A Fullstack Web3 application to search for any NFT Collection by contract address. Select a chain, input any NFT contract address or click the scrolling collections to search for and display an NFT collection.",
      technologies: [
        "React",
        "Vite",
        "Typescript",
        "NodeJS",
        "ExpressJS",
        "TailwindCSS",
        "Ethers.js",
        "Wagmi",
        "Viem",
        "Antd Design",
      ],
      links: [
        {
          type: "Website",
          href: "https://zeroxnft.vercel.app/",
          icon: <Icons.globe className='size-3' />,
        },
        {
          type: "Source",
          href: "https://github.com/Helkem/ZeroXNFTs",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: "/zeronfts.png",
    },
    {
      title: "StablePay",
      href: "https://stablepayx.vercel.app/",
      dates: "2023",
      active: true,
      description:
        "A Web3 React App to send Stablecoins, View Onchain balances, and check prices against USD. Integrates the use of Wagmi and Viem libraries to interact with the ERC20 smart contracts on ETH Mainnet. Only send real tokens unless intended.",
      technologies: [
        "React",
        "Vite",
        "Javascript",
        "Ethers.js",
        "Wagmi",
        "Viem",
        "CSS3",
        "React Router",
        "Antd Design",
      ],
      links: [
        {
          type: "Website",
          href: "https://stablepayx.vercel.app/",
          icon: <Icons.globe className='size-3' />,
        },
        {
          type: "Source",
          href: "https://github.com/Helkem/StablePay",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: "/stablepay.png",
    },
  ],
} as const;
