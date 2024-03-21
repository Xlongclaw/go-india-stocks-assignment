import { BiDollar, BiTrendingUp, BiArea, BiNews } from "react-icons/bi";
import { CgList } from "react-icons/cg";
import { GoCommentDiscussion } from "react-icons/go";
import { MdSentimentSatisfied, MdEvent } from "react-icons/md";

const DRAWER_DATA = [
  {
    icon: GoCommentDiscussion,
    link: "/",
    title: "Discussion Forum",
    subCategories: [
      {
        link: "#",
        title: "Market",
      },
    ],
  },
  {
    icon: BiDollar,
    link: "/market-stories",
    title: "Market Stories",
    subCategories: [],
  },
  {
    icon: MdSentimentSatisfied,
    link: "/sentiments",
    title: "Sentiments",
    subCategories: [],
  },
  {
    icon: BiTrendingUp,
    link: "/market",
    title: "Market",
    subCategories: [],
  },
  {
    icon: BiArea,
    link: "/sector",
    title: "Sector",
    subCategories: [],
  },
  {
    icon: CgList,
    link: "/watchlist",
    title: "WatchList",
    subCategories: [],
  },
  {
    icon: MdEvent,
    link: "/events",
    title: "Events",
    subCategories: [],
  },
  {
    icon: BiNews,
    link: "/news",
    title: "News",
    subCategories: [],
  },
];

export default DRAWER_DATA;
