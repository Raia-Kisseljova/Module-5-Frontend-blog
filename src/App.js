import "./App.css";
import NavMenu from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import FormPost from "./components/FormPost";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import DisplayBlogs from "./components/displayBlogs";
import { Button } from "react-bootstrap";
function App() {
  const [postArcticle, setPostArcticle] = React.useState(true);
  return (
    <div className="App">
      <BrowserRouter>
        <NavMenu />
        <Button className="mt-3" onClick={() => setPostArcticle(!postArcticle)}>
          Post new +
        </Button>
        {postArcticle && <FormPost />}
        <DisplayBlogs />
      </BrowserRouter>
    </div>
  );
}

export default App;
