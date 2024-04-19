import { useState } from "react";

interface TesteProps {
  age?: number;
}

interface AppProps extends TesteProps{
  name: string;
  address?: string; 
}

function App({name, age, address = "Valor padrão"}: AppProps) {
  const [count, setCount] = useState(5)

  return (
    <>
     <p>Você clicou {count} vezes</p>
     <button onClick={() => setCount(count +1)}>
      Clique aqui
     </button>
    </> 
  )
}

export default App