
import { useState } from "react";
import messages from "./data";
import MessageCard from "./MessageCard";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const filteredMessages = messages.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">

      <h1>EXERCISE</h1>

      <div className="chat-box">

        <div className="search-box">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span>⌕</span>
        </div>

        <div className="message-list">
          {filteredMessages.map((item) => (
            <MessageCard
              key={item.id}
              name={item.name}
              message={item.message}
              time={item.time}
              image={item.image}
            />
          ))}
        </div>

        {filteredMessages.length === 0 && (
          <p className="no-result">No messages found</p>
        )}

      </div>

    </div>
  );
}

export default App;
