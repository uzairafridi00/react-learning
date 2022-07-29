import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    function getData() {
      setLoading(true);
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setPosts(data);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    }
    getData();
  }, []);

  return (
    <>
      <div className="App">
        <h1>Search Filter</h1>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchTitle(e.target.value)}
        />
        {loading ? (
          <h4>Loading...</h4>
        ) : (
          posts
            .filter((value) => {
              if (searchTitle === "") {
                return value;
              } else if (
                value.title
                  .toLowerCase()
                  .includes(searchTitle.toLocaleLowerCase())
              ) {
                return value;
              }
            })
            .map((item) => <h5 key={item.id}>{item.title}</h5>)
        )}
      </div>
    </>
  );
}

export default App;
