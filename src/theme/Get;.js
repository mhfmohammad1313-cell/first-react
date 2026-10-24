// Get;
// Post;
// Put;
// Patch;
// Delete;
// Options;
// Head;

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
}).then((response) => {
  return response.json();
}).then(res =>  console.log(res))
    
    ;
