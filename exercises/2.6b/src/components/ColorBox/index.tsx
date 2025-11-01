import { useState } from "react";

const colors = ["red", "green", "blue", "yellow", "purple"];


const ColorBox = () => {
    const [currentColorIndex, setCurrentColorIndex] = useState(0);

return (
    <div
      className="color-box"
      style={{ backgroundColor: colors[currentColorIndex] }}
    >
        <button className="color-box__button"
        onClick={() => {
            setCurrentColorIndex((currentColorIndex + 1) % colors.length);
        }}
        >
            {colors[(currentColorIndex + 1) % colors.length]} //texte du bouton, affiche la prochaine couleur
        </button>
        <h3>{colors[currentColorIndex]}</h3> //Affiche la couleur actuelle
    </div>
);
};

export default ColorBox;