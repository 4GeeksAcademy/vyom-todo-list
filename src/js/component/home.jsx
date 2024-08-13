import React, { useState } from "react";
import "./home.css";

const Home = () => {
  const [items, setItems] = useState([
    "hola soy una prueba",
    "uno dos tres probando micro...",
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let valueInput = e.target.newTarea.value;
    if (valueInput !== "") {
      const arrAux = items.concat(valueInput);
      setItems(arrAux);
      e.target.newTarea.value = "";
    }
  };

  console.log(items);

  const handleDelete = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <main
      className="text-white d-flex justify-content-center align-items-center flex-column"
      style={{
        height: "100vh",
      }}
    >
      <h1 className="text-secondary m-0 text-center">todos</h1>
      <div
        className="w-75 mx-auto rounded p-5 bg-white position-relative"
        style={{
          boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
          maxWidth: "1200px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <input
            className=" w-100 fs-3 border-bottom"
            placeholder="What happen bro...?"
            type="text"
            style={{ border: "none", outline: "none" }}
            id="newTarea"
            autoComplete="off"
          />
        </form>
        <ul className="text-secondary mt-3 fs-3 d-flex gap-2 flex-column w-100 list-group">
          {items.map((item, index) => (
            <li
              className="li-container p-2 d-flex justify-content-between border-bottom rounded"
              key={index}
              id={index}
            >
              <p className="p-0 m-0 my-auto">{item}</p>
              <button
                className="li-btn btn text-danger fw-bold fs-4"
                onClick={() => handleDelete(index)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
        <span className="text-secondary position-absolute bottom-0 start-0 p-1">
          {items.length} items
        </span>
      </div>
    </main>
  );
};

export default Home;
