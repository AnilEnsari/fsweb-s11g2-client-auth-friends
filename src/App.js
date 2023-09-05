import { Route } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Header from "./layouts/Header";
import AddFriend from "./pages/AddFriend";
import FriendList from "./pages/FriendList";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/addfriend" exact>
        <AddFriend />
      </Route>
      <Route path="/friendlist" exact>
        <FriendList />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
    </div>
  );
}

export default App;
