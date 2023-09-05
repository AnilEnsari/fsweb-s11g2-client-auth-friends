import { useContext } from "react";
import "./addfriend.css";
import { FriendsContext } from "../context/FriendsProvider";
import axios from "axios";
import { useHistory } from "react-router-dom";
const Login = () => {
  const { user, setUser, setCheck } = useContext(FriendsContext);
  const history = useHistory();
  const handleChange = (event) => {
    setUser(user, (user[event.target.name] = event.target.value));
  };
  const passHandler = () => {
    axios
      .post("http://localhost:9000/api/login", user)
      .then((res) => {
        localStorage.setItem("s11g2", res.data.token);
        setCheck(true);
        history.push("/friends");
      })
      .catch((err) => console.log(err));
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
