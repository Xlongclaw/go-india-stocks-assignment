export interface MarketStoriesType {
  title: string;
  shortDes: string;
  date: string;
  image: string;
};

export interface PostType {
  _id: string;
  postedBy: string;
  postText: string;
  postedAt: string;
  likes: number;
  views: number;
  images: Array<string>;
  comments: Array<{}>;
}