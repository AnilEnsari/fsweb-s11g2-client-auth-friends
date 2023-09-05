import { useContext } from "react";
import { FriendsContext } from "../context/FriendsProvider";

const FriendList = () => {
  const { friends } = useContext(FriendsContext);
  return (
    <div className="friendListContainer">
      <h1>FRIENDLIST </h1>
      {friends.map((friend, index) => (
        <div key={index}>
          -{" " + friend.name.toUpperCase() + " "}-
          {" " + friend.email.toUpperCase() + " "}
        </div>
      ))}
    </div>
  );
};

export default FriendList;
