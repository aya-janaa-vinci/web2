import type { Movie } from "../../types";
import { type SyntheticEvent, useState } from "react";

interface AddMovieFormProps {
  onMovieAdded: (movie: Movie) => void; //AddMovieForm attend qu’on lui envoie une fonction onMovieAdded depuis le composant parent.
}

const AddMovieForm = ({ onMovieAdded }: AddMovieFormProps) => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState(0);

  const handleSubmit = (e: SyntheticEvent) => {
    // à chaque fois que je soumets, un evenement est creer
    e.preventDefault();
    onMovieAdded({ title, director, duration, imageUrl, description, budget });

    //remet tt à vide dans mon formulaire
    setTitle("");
    setDescription("");
    setDuration(0);
    setImageUrl("");
    setDirector("");
    setBudget(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Titre :</label>
        <input
          type="text"
          value={title} 
          onChange={(e) => setTitle(e.target.value)} /* chaque fois que l’utilisateur tape quelque chose, ça met à jour le state title */
          required
        />
      </div>
      <div>
        <label>Réalisateur :</label>
        <input
          type="text"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Durée :</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(parseInt(e.target.value))}
          required
        />
      </div>
      <div>
        <label>URL de l'image :</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <div>
        <label>Description :</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Budget :</label>
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(parseInt(e.target.value))}
        />
      </div>
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddMovieForm;