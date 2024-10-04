import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [searchTerm, setsearchTerm] = useState("");
  const [suggestion, setsuggestion] = useState([]);

  // https://dummyjson.com/users/search?q=John

  useEffect(() => {
    const fetchUsers = () => {
      if (searchTerm.trim() === "") {
        setsuggestion([]);
        return;
      }
      fetch(`https://dummyjson.com/users/search?q=${searchTerm}`)
        .then((res) => res.json())
        .then((data) => setsuggestion(data))
        .catch((err) => {
          console.error(err);
        });
    };
    fetchUsers();
  }, [searchTerm]);

  return (
    <>
      <div className="user-search-container">
        <div className="user-search-input">
          {/* pills */}
          {/* input field with search suggestion */}
          <div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setsearchTerm(e.target.value);
              }}
              placeholder="Search for a User......"
            />
            {/* Search Suggestion */}
            <ul className="suggestion-list">{suggestion.users}</ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
