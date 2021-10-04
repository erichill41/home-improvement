import React from "react";
import Navigation from "./Navigation";

function Header() {
  return (
    <div className="container-fluid">
    <header className="jumbotron p-3 bg-dark">
      <div className="container text-center text-white">
        <h1 className="display-2"> Home Improvement </h1>
      </div>
      <div className="pt-2">
        <Navigation />
      </div>  
    </header>
    
  </div>
  );
}

export default Header;