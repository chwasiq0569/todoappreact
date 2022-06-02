import React from "react";
import "./home.css";
import Completed from "../../images/tick-inside-circle.png";
import CreateIcon from "../../images/page.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
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
      <div className="todosContainer">
        <div className="row">
          <h1 className="todosHeading">Todos</h1>
          <button onClick={() => navigate("/create")}>
            Create <img src={CreateIcon} alt="create-icon" />
          </button>
        </div>

        {todos.map((todo) => (
          <div className="todo">
            <p>{todo.title}</p>
            <div>
              <img
                className="completeIcon"
                src={Completed}
                alt="complete-icon"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
