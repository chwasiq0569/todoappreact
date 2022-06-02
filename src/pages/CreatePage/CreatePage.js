import React from "react";
import "./createpage.css";
import Completed from "../../images/tick-inside-circle.png";
import CreateIcon from "../../images/page.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

const CreatePage = (props) => {
  let navigate = useNavigate();
  let params = useParams();

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  React.useEffect(() => {
    console.log(params);
  }, []);

  const createTodo = (data) => {
    axios
      .post("http://localhost:5000/createTodo", {
        title: title,
        description: description,
      })
      .then((response) => alert("Todo Created"));
  };

  return (
    <div className="page">
      <div className="formContainer">
        <p className="homeLink" onClick={() => navigate("/")}>
          Home
        </p>
        <br />
        <br />

        <p>Title</p>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <p>Description</p>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button onClick={createTodo}>Create Todo</button>
      </div>
    </div>
  );
};

export default CreatePage;
