import React from "react";
import "./App.css";

// navbar
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

// layout
function Layout() {
  return (
    <div className="layout">
      <h1>Hello world</h1>

      <form action="" className="form">
        <div>
          <label htmlFor="" >firstName</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">lastName</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="text" />
        </div>
        <button type="submit"> Create an Account</button>
      </form>
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

      {/* Navbar */}

      {/* sidebar */}

      {/* layout */}
    </div>
  );
}
export default App;
