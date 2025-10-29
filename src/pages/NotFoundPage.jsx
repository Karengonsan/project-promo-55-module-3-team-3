import "react";
import { Link } from "react-router-dom";
import "../styles/not-found-page.css";

const NotFoundPage = () => {
  return (
    <div className="notfoundpage">
      <h1>404 Not Found Page</h1>

      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFoundPage;
