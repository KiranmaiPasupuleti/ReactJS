import  { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

const Todos = () => {
  const [todo, setTodo] = useState([]);
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(false);

  //add--> creating (add to db.json) / POST

  const handleAdd = (inputValue) => {
    const newTodoItem = {
      title: inputValue,
      status: false,
    };

    let result = fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodoItem), //object to json
    });

    result.then(() => {
      // update DOM
      setStatus(!status);
    });
    result.catch((error) => {
      console.log(error);
    });
  };

  //get ---> read from db.json

  async function fetchAndUpdateData() {
    try {
      setLoading(true); // when the api call is happening
      let response = await fetch("http://localhost:3000/todos");
      let data = await response.json();
      setTodo(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  //delete -->
  const handleDelete = (id) => {
    let result = fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
    });

    result.then(() => {
      setStatus(!status);
    });
  };

  //update ---> patch/put

  const handleToggle = (id, body) => {
    let result = fetch(`http://localhost:3000/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body), //object to json
    });

    result.then(() => {
      setStatus(!status);
    });
  };

  useEffect(() => {
    fetchAndUpdateData();
  }, [status]);

  return (
    <>
      <AddTodo handleAdd={handleAdd} />

      {loading ? (
        <h1>Loading....</h1>
      ) : (
        todo.map((item) => {
          return (
            <TodoItem
              key={item.id}
              {...item}
              handleDelete={handleDelete}
              handleToggle={handleToggle}
            />
          );
        })
      )}
    </>
  );
};

export default Todos;
