import Details from "./components/Details";
import Header from "./components/Header";
import CreateProject from "./components/CreateProject";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserList from "./components/UserList";

function App() {
  return (
    <Router>
      <div className="main-container">
        <Header></Header>
        <Switch>
          <Route path="/" exact component={Details}></Route>
          <Route path="/create-project" component={CreateProject}></Route>
          <Route path="/users" component={UserList}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
