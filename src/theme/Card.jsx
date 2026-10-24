import { useState } from "react";

export default function Card() {
  const [text, setText] = useState();
  const [newItem, setNewItem] = useState();
  const [todoes, setTodoes] = useState([
    {
      id: 1,
      title: "study react",
    },
  ]);
  console.log(todoes, newItem);
  
  return (
    <>
      <div
        className="w-100 d-flex p-5 align-items-center justify-content-center"
        style={{ height: "50vh" }}
      >
        <button className="btn btn-warning " style={{ height: "10%" }}>
          -
        </button>

        <div className="w-100 bg-danger m-1" style={{ height: "50%" }}>
          1
        </div>
        <div className="w-100 bg-warning m-1" style={{ height: "50%" }}>
          2
        </div>
        <div className="w-100 bg-danger m-1" style={{ height: "50%" }}>
          3
        </div>
        <button className="btn btn-warning " style={{ height: "10%" }}>
          +
        </button>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <input onInput={(event) => setText(event.target.value)} />
              <div className="card-header">
                your link:{" "}
                <span className="text-secondary">
                  {" "}
                  http://wwww.test.com/@{text}
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-6 card p-3">
            <div>
              <h3>todo list</h3>
              <hr />
              <div className="d-flex gap-2">
                <input
                  type="text"
                  className="flex-grow-1"
                  onChange={(event) => setNewItem(event.target.value)}
                />
                <button
                  className="btn btn-outline-primary"
                  onClick={() => {
                    setTodoes([...todoes, { id: 2, title: newItem }]);
                  }}
                >
                  +
                </button>
              </div>
              <hr />
            </div>
            <div>
              <ul>
                {todoes.map((item, index) => {
                  return (
                    <li className="item" key={item.id}>
                      <div className="d-flex justify-content-between">
                        <div>
                          <input
                            type="checkbox"
                            key={item.id}
                            id={"item-" + index}
                            className="me-2"
                          />
                          <label htmlFor={"item-" + index}>{item.title}</label>
                        </div>
                        <div>
                          <button
                            className="btn btn-outline-danger"
                            onClick={() => {
                              setTodoes(
                                todoes.filter((todo) => todo.id !== item.id),
                              );
                            }}
                          >
                            X
                          </button>
                        </div>
                      </div>
                      <hr />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
