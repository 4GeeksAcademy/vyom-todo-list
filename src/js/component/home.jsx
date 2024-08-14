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

  // console.log(items);

  const handleDelete = (index) => {
    const newItems = items.filter((hol, i) => i !== index);
    // const newItems = items.filter((i) => i !== items[index]);
    setItems(newItems);
  };

  return (
    <main
      className="text-white d-flex justify-content-center align-items-center flex-column"
      style={{
        height: "100vh",
        // background: "#0f1f44",
      }}
    >
      <h1
        className="text-danger m-0 text-center"
        style={{ zIndex: 10, fontSize: "100px" }}
      >
        List
      </h1>
      <div
        className="w-75 mx-auto rounded p-5 bg-white position-relative"
        style={{
          boxShadow:
            "rgb(38, 57, 77) 0px 20px 100px -10px, rgba(30, 50, 72, 0.4) 0px 5px, rgba(30, 50, 72, 0.3) 0px 10px, rgba(30, 50, 72, 0.2) 0px 15px, rgba(30, 50, 72, 0.1) 0px 20px, rgba(30, 50, 72, 0.05) 0px 25px",
          maxWidth: "1200px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <input
            className=" w-100 fs-3 border-bottom"
            placeholder="que hay de nuevo viejo?🐰(escribe aqui)"
            type="text"
            style={{ border: "none", outline: "none" }}
            id="newTarea"
            autoComplete="off"
          />
        </form>
        <ul className="text-secondary mt-3 fs-3 d-flex gap-2 flex-column w-100 list-group">
          {items.map((item, index) => (
            <li
              className="li-container p-2 d-flex justify-content-between  rounded"
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
        <span className="text-secondary px-2 position-absolute bottom-0 start-0 p-1">
          <span className="text-danger fw-bold">{items.length}</span> items
        </span>
      </div>
    </main>
  );
};

export default Home;
