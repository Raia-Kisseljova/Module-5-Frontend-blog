import "./App.css";
import NavMenu from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import FormPost from "./components/FormPost";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavMenu />
        <Route path="/" exact component={FormPost}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
