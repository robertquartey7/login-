import React, { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import "./App.css";

const users = [];

function Navbar() {
  return (
    <div className="navbar">
      <h1 className="navbar-title">TKH</h1>
      <div className="menu-link">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </div>
    </div>
  );
}
// SideBar
function SideBar() {
  return (
    <div className="sidebar">
      <a href="">portfolio</a>
      <a href="">blog</a>
    </div>
  );
}


function Welcome({name}){
  return(
    <div>
      <h1>Welcome {name}</h1>
    </div>
  )
}

// layout
function Layout() {
  const [isShowLogin, setIsShowLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLogged, setIsLogged] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "username") {
      setUsername(value);
    } else if (name == "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username == "user123" && password == '123') {
      setIsLogged(true)
    } else {
      setError(true);
    }

  };
console.log(isShowLogin, isLogged)
  return (
    <div className="layout bg-dark text-white">
      { isLogged ?<Welcome name={username}/>: isShowLogin ? (
        <>
          <Container>
            <Row>
              <Col lg={8} className="m-auto">
                <h1 className="text-center">Login</h1>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username: </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your Username: "
                      name="username"
                      value={username}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    Submit
                  </Button>
                  <div className="mt-2">
                    <span>Don't have an account</span>
                    <Button
                      variant="outline-primary"
                      onClick={() => {
                        setIsShowLogin(false);
                      }}
                    >
                      Signup
                    </Button>
                  </div>
                  {error && (
                    <Alert variant="danger">
                      username or password is incorrect
                    </Alert>
                  )}
                </Form>
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        <>
          <Container>
            <Row>
              <Col lg={8} className="m-auto">
                <h1 className="text-center">SignUp</h1>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username: </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your Username: "
                      name="username"
                      value={username}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    Submit
                  </Button>
                  <div className="mt-2">
                    <span>Already have an account</span>
                    <Button
                      variant="outline-primary"
                      onClick={() => {
                        setIsShowLogin(true);
                      }}
                    >
                      Login
                    </Button>
                  </div>
                  {error && (
                    <Alert variant="danger">
                      username or password is incorrect
                    </Alert>
                  )}
                </Form>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <div className="navbar-box">
        <Navbar />
      </div>
      <div className="main-box">
        <div>
          <SideBar />
        </div>
        <div>
          <Layout />
        </div>
      </div>
    </div>
  );
}
export default App;
