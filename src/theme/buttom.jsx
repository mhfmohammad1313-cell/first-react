import { useContext, useEffect, useState } from "react";
import UserContext from "./context";

export default function Buttom() {
  const user = useContext(UserContext)
  
  const [users, setUsers] = useState([]);
  const [newItem, setNewItem] = useState({
    name: null,
    email: null,
  });

  useEffect(() => {
    getData()
  }, []);

  function getData() {
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((users) => {
        setUsers(users);
      });
  }

  function saveData() {
    fetch("http://localhost:3001/users", {
      method: "POST",
      body: JSON.stringify(newItem)
    })
      .then((res) => {
        console.log(res);
        
        if (res.ok) {
          getData()
        }
      })
      
  }

  return (
    <>
      <style>
        {`
          label{
            position: relative;
            bottom: 1rem;
  left: 4rem;
  background: white;
  padding: 0 0.25rem;
          }
        `}
      </style>
      <h2>List</h2>
      <hr />
      <div className=" container">
        <div className="row">
          <div className="mb-3 col-md-6 col-lg-4">
            <label htmlFor="">name</label>
            <input
              type="text"
              onChange={(event) =>
                setNewItem({ ...newItem, name: event.target.value })
              }
            />
          </div>
          <div className="mb-3 col-md-6 col-lg-4">
            <label>gmail</label>
            <input
              type="text"
              onChange={(event) =>
                setNewItem({ ...newItem, eamil: event.target.value })
              }
            />
          </div>
        </div>
        <button onClick={saveData}>submit</button>
      </div>
      <div>
        <table>
          <tr>
            <th>row</th>
            <th>Name</th>
            <th>Email</th>
            <th>operation</th>
          </tr>
          {users?.map((item, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <button>view</button>
                  <button>edit</button>
                  <button>delete</button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}
