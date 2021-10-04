import React from "react";
import { useHistory } from "react-router-dom";

function Navigation() {
  const history = useHistory();

  return (
    <div className="row justify-content-center">
      <div className="col-auto">
        <button
          className="btn btn-outline-light"
          onClick={() => history.push('/projects/new')}
        >
          New Project
        </button>
      </div>

      <div className="col-auto">
        <button
          className="btn btn-outline-light"
          onClick={() => history.push('/')}
        >
          Home
        </button>
      </div>

      <div className="col-auto">
        <button
          className="btn btn-outline-light"
          onClick={() => history.push('/bills/new')}
        >
          New Bill
        </button>
      </div>
    </div>
  );
}

export default Navigation;