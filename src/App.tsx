import { useEffect, useState } from "react";
import "./App.css";

// const url = import.meta.env.VITE_BASE_URL;
const url = import.meta.env.VITE_BASE_URL;

type Pokemon = {
  name: string;
  url: string;
};

type PokemonResponse = {
  count: number;
  next: string;
  previous: string | null;
  results: Pokemon[];
};

function App() {
  const [data, setData] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data: PokemonResponse) => {
        setData(data.results);
      });
  }, []);

  return (
    <ul>
      {data.map((item) => (
        <li key={item.name}>{item.name}</li>
      ))}
    </ul>
  );
}

export default App;
