import { useEffect, useState } from "react";
import UserList from "./UsersList";

export default function Data() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("http://loaclhost:3001/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setUsers(data);
      })

      // .then((res) => {
      //     return res.json()
      // })

      .catch((er) => {
        console.log(er);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [count]);

  return (
    <div className="container my-5">
      {loading && (
        <div>
          <p>loading .... </p>
        </div>
      )}

      {users.map((item) => {
        return (
          <>
            <UserList info={item} />
          </>
        );
      })}

      <p>{count}</p>
      <button onClick={() => setCount(count + 1)} className="btn btn-primary">
        +
      </button>
      <p>{text}</p>
      <input type="text" onInput={(event) => setText(event.target.value)} />
    </div>
  );
}
// import react from "react"
// class Amir extends react.Component {
//     constructor() {
//         super()
//         console.log('constructor');
//    this.state = {
//         users: []
//    }

//     }

//     componentDidMount() {
//         console.log('Did');

//     }
//     componentWillUnmount() {
//         console.log('unmount');

//     }
//     componentWillMount() {
//         console.log('will');

//     }

//     render() {
//         console.log('render');

//         return (<>
//             <h1>class components</h1>
//         </>

//         )
//     }
// }
// export default Amir
