import { useState } from "react";
import RandomDog from "../RandomDog";

export const App = () => {
  const [refresh, setRefresh] = useState(false);

  //Quand refresh change, les keys changent aussi donc nvl images
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
        {/*technique pour forcer un re-render complet des composants enfants.*/}
        <RandomDog key={`${refresh}1`} />
        <RandomDog key={`${refresh}2`} />
        <RandomDog key={`${refresh}3`} />
      </div>

      <button
        onClick={() => setRefresh(!refresh)}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "1em",
          cursor: "pointer",
        }}
      >
        Refresh Dogs
      </button>
    </>
  );
};

export default App;
