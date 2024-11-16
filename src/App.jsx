import { useState } from "react";
import Data from "./Data.jsx";
console.log(Data);

import "./App.css";

function App() {
  const [name, setCount] = useState(Data);
  setCount;
  return (
    <>
      <div className="birthday-section">
        <div className="birthdayAlign">
          <h1>{name.length} person of birthday </h1>
          {name.map(({ id, img, name, text }) => {
            return (
              <>
              <article>
<img src={img} alt={name} key={id} className="img" />
              </article>
              <div className="text">
                 <h3>{name}</h3>
                <p>{text}</p>
              </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
