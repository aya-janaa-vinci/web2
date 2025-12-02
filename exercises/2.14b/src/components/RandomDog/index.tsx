import { useEffect, useState } from "react";
import type { Dog } from "../../types";

const RandomDog = () => {
  const [dog, setDog] = useState<Dog | undefined>(undefined);

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");

        const doggy = await response.json();
        setDog({
          message: doggy.message ?? "No dog found",
          status: doggy.status ?? "Error",
        });
      } catch (error) {
        console.error("Failed to fetch dog image", error);
        setDog({ message: "Failed to fetch dog image", status: "Error" });
      }
    };
    fetchDogImage();

    const intervalId = setInterval(() => {
      fetchDogImage();
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  if (!dog) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h3>Random dog</h3>
      <img src={dog.message} alt="Random dog" style={{ maxHeight: 300 }} />
    </div>
  );
};

export default RandomDog;
