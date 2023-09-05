import { Route } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Header from "./layouts/Header";
import AddFriend from "./pages/AddFriend";
import FriendList from "./pages/FriendList";
import Login from "./pages/Login";
import { FriendsContext } from "./context/FriendsProvider";
import { useContext } from "react";

function App() {
  const { check } = useContext(FriendsContext);
  return (
    <div className="App">
      <Header />
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/addfriend" exact>
        {check ? <AddFriend /> : <Login />}
      </Route>
      <Route path="/friendlist" exact>
        {check ? <FriendList /> : <Login />}
      </Route>
    </div>
  );
}

export default App;
