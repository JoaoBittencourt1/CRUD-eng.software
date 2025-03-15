import { useState, useEffect } from "react";

function App() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/dados")
      .then((response) => response.json())
      .then((data) => setDados(data))
      .catch((error) => console.error("Erro ao buscar dados:", error));
  }, []);

  return (
    <div>
      <h1>Dados do Banco</h1>
      <ul>
        {dados.map((item) => (
          <li key={item.id}>{item.nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
