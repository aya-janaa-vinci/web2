import RandomDog from "../RandomDog";

export const App = () => {

  //Quand refresh change, les keys changent aussi donc nvl images
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
        {/*technique pour forcer un re-render complet des composants enfants.*/}
        <RandomDog />
        <RandomDog />
        <RandomDog />
      </div>
    </>
  );
};

export default App;
