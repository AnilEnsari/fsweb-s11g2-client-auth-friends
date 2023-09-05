import { createContext, useState } from "react";

export const FriendsContext = createContext();

const FriendsProvider = ({ children }) => {
  const nanoid = (n) => {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < n; i++) {
      result += chars[Math.floor(Math.random() * 26)];
    }
    return result;
  };
  const initialData = [
    {
      id: nanoid(5),
      name: "Rachel Green",
      age: 30,
      email: "rachel@friends.com",
    },
    {
      id: nanoid(5),
      name: "Joey Tribbiani",
      age: 34,
      email: "joey@friends.com",
    },
    {
      id: nanoid(5),
      name: "Chandler Bing",
      age: 32,
      email: "chandler@friends.com",
    },
    {
      id: nanoid(5),
      name: "Ross Geller",
      age: 32,
      email: "ross@friends.com",
    },
    {
      id: nanoid(5),
      name: "Monica Bing",
      age: 31,
      email: "monica@friends.com",
    },
    {
      id: nanoid(5),
      name: "Phoebe Buffay-Hannigan",
      age: 30,
      email: "phoebe@friends.com",
    },
  ];
  const [friends, setFriends] = useState(initialData);
  const addNewFriend = (friend) => setFriends([...friends, friend]);
  const [user, setUser] = useState({ username: "", password: "" });

  return (
    <FriendsContext.Provider
      value={{
        friends,
        setFriends,
        addNewFriend,
        user,
        setUser,
      }}
    >
      {children}
    </FriendsContext.Provider>
  );
};

export default FriendsProvider;
