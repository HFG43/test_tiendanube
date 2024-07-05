import axios from "axios";
import React from "react";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts"
});  

const Axios = () => {
const [post, setPost] = React.useState(null);

React.useEffect(()=> {
  client.get("/1").then((response) => {
    setPost(response.data)
  });
}, []);

// Ejemplo con Async Await que es más limpio

//React.useEffect(() => {
  //  async function getPost() {
    //  const response = await client.get("/1");
    //  setPost(response.data);
   // }
   // getPost();
 // }, []);

async function deletePost() {
    await client.delete("/1");
    alert("Post deleted!");
    setPost(null);
  }

if (!post) return null;

    return (
        <>
          <p>{post.title}</p>
          <p>{post.body}</p>
          <button onClick={deletePost}>Delete Post</button>
        </>
    );
}

export default Axios;