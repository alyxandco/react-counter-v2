import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Counter from "./components/Counter";
import Addcounter from "./components/Addcounter";

function App() {
  const [addcount, setAddcount] = useState([0]);

  return (
    <div className="MainContainer">
      <Header />
      <Addcounter addcount={addcount} setAddcount={setAddcount} />
      <div className="App">
        {addcount.map((counter, index) => {
          return (
            <div key={index}>
              <Counter
                counter={addcount}
                setCounter={setAddcount}
                index={index}
              />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
