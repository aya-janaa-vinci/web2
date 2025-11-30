import { useState, useEffect } from "react";
import "./App.css";
import type { Joke } from "./types";

const App = () => {
  const [joke, setJoke] = useState<Joke | undefined>(undefined);

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setJoke({
          category: data.category ?? "Unknown", // ?? = si elle est nulle, ça sera unknown
          text: data.joke ?? "No joke found",
        });
      });
  }, []);

  if(!joke){
    return <p>Loading...</p>
  }

  return(
    <div>
      <h3>Random joke</h3>
      <h4>{joke.category}</h4>
      <blockquote>
      <p>{joke.text}</p>
      </blockquote>
      <p>
        <cite>https://v2.jokeapi.dev/joke.category</cite>
      </p>
    </div>
  );
};

export default App;
