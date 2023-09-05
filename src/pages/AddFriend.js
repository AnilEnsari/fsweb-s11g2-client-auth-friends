import { useContext, useState } from "react";
import { FriendsContext } from "../context/FriendsProvider";
import "./addfriend.css";
const AddFriend = () => {
  const [newFriend, setNewFriend] = useState({
    name: "",
    email: "",
    id: Date.now(),
  });
  const { addNewFriend } = useContext(FriendsContext);
  const { friends } = useContext(FriendsContext);

  const addHandler = (e) => {
    e.preventDefault();
    addNewFriend(newFriend);
    console.log(friends);
  };
  const handleChange = (event) => {
    setNewFriend(
      newFriend,
      (newFriend[event.target.name] = event.target.value)
    );
  };
  return (
    <div className="addFriendContainer">
      <h1>ADD FRIEND</h1>
      <form className="columnForms">
        <div>
          <label htmlFor="friendName">FRIEND NAME</label>
          <input
            onChange={handleChange}
            className="inputclass"
            id="friendName"
            type="text"
            name="name"
          ></input>
        </div>
        <div>
          <label htmlFor="friendEmail">FRIEND EMAIL</label>
          <input
            onChange={handleChange}
            className="inputclass"
            id="friendEmail"
            type="email"
            name="email"
          ></input>
        </div>
        <button onClick={addHandler}>SUBMIT</button>
      </form>
    </div>
  );
};
export default AddFriend;
