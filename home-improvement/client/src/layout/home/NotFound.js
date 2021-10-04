import React from "react";
import { useHistory } from "react-router-dom";

function NotFound() {
  const history = useHistory();

  return (
    <div className="NotFound">
      <h1>Not Found</h1>
      <button type="button" className="btn btn-primary" onClick={() => history.goBack()}> Go Back </button>
    </div>
  );
}

export default NotFound;