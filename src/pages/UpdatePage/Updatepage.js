import React from "react";
import "./updatepage.css";
import Completed from "../../images/tick-inside-circle.png";
import CreateIcon from "../../images/page.png";
import { useNavigate } from "react-router-dom";

const UpdatePage = () => {
  let navigate = useNavigate();

  const [todos, setTodos] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTodos(data.todos);
      });
  }, []);

  return (
    <div className="page">
      <div className="formContainer">
        <p className="homeLink" onClick={() => navigate("/")}>
          Home
        </p>
        <br />
        <br />

        <p>Title</p>
        <input type="text" />
        <p>Description</p>
        <textarea></textarea>
        <button>Update Todo</button>
      </div>
    </div>
  );
};

export default UpdatePage;
