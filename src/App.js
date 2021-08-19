import "./App.css";
import NavMenu from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import FormPost from "./components/FormPost";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import DisplayBlogs from "./components/displayBlogs";
import { Button, Container } from "react-bootstrap";
function App() {
  const [postArcticle, setPostArcticle] = React.useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <NavMenu />
          <Button
            className="my-4"
            onClick={() => setPostArcticle(!postArcticle)}
          >
            Post new +
          </Button>
          {postArcticle && <FormPost />}
          <DisplayBlogs />
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
