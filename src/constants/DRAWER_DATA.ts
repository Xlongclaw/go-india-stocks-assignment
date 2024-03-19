import { BiDollar, BiTrendingUp, BiArea, BiNews } from "react-icons/bi";
import { BsList } from "react-icons/bs";
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
    link: "#",
    title: "Market Stories",
    subCategories: [],
  },
  {
    icon: MdSentimentSatisfied,
    link: "#",
    title: "Sentiments",
    subCategories: [
      {
        link: "#",
        title: "Market",
      },
    ],
  },
  {
    icon: BiTrendingUp,
    link: "#",
    title: "Market",
    subCategories: [],
  },
  {
    icon: BiArea,
    link: "#",
    title: "Sector",
    subCategories: [],
  },
  {
    icon: BsList,
    link: "#",
    title: "WatchList",
    subCategories: [],
  },
  {
    icon: MdEvent,
    link: "#",
    title: "Events",
    subCategories: [],
  },
  {
    icon: BiNews,
    link: "#",
    title: "News",
    subCategories: [],
  },
];


export default DRAWER_DATA