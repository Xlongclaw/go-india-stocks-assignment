type UserData = {
  name: string;
  userImage: string;
  userName: string;
  status:
    | "Legend"
    | "Diamond"
    | "Platinum"
    | "Gold"
    | "Silver"
    | "Bronze"
    | "Rookie";
  des: string;
};

const USER_DATA: UserData = {
  name: "Longclaw",
  userImage:
    "https://res.cloudinary.com/dlxpf7d8c/image/upload/v1710842264/nimwwqjysikdtcbfrskv.jpg",
  userName: "xlongclaw",
  status: "Diamond",
  des: "Stock Market Giant",
};

const OTHER_USERS_DATA: Array<UserData> = [
  {
    name: "Walter White",
    userName: "walterwhite410",
    userImage:
      "https://res.cloudinary.com/dlxpf7d8c/image/upload/v1710861629/ta6wnzzzcrqbznpiio3s.jpg",
    status: "Legend",
    des: "Crypto Whale",
  },
  {
    name: "Madhuresh Verma",
    userName: "madhureshverma790",
    userImage:
      "https://res.cloudinary.com/dlxpf7d8c/image/upload/v1710854361/gje3vo4nceqb9gfpedtj.png",
    status: "Diamond",
    des: "Stock market Giant",
  },
  {
    name: "Longclaw",
    userImage:
      "https://res.cloudinary.com/dlxpf7d8c/image/upload/v1710842264/nimwwqjysikdtcbfrskv.jpg",
    userName: "xlongclaw",
    status: "Rookie",
    des: "Stock Market Giant",
  }
];

export { OTHER_USERS_DATA };
export default USER_DATA;
