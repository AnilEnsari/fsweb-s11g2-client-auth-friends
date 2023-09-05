import { useContext } from "react";
import "./addfriend.css";
import { FriendsContext } from "../context/FriendsProvider";
const Login = () => {
  const { user, setUser } = useContext(FriendsContext);

  const passHandler = (e) => {
    e.preventDefault();
  };
  const handleChange = (event) => {
    setUser(user, (user[event.target.name] = event.target.value));
  };
  return (
    <div className="addFriendContainer">
      <h1>LOGIN</h1>
      <form className="columnForms">
        <div>
          <label htmlFor="userName">USERNAME</label>
          <input
            onChange={handleChange}
            className="inputclass"
            id="userName"
            type="text"
            name="username"
          ></input>
        </div>
        <div>
          <label htmlFor="password">PASSWORD</label>
          <input
            onChange={handleChange}
            className="inputclass"
            id="password"
            type="password"
            name="password"
          ></input>
        </div>
        <button onClick={passHandler}>SUBMIT</button>
      </form>
    </div>
  );
};
export default Login;
