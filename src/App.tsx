import { useState } from "react";

interface TesteProps {
  age?: number;
}

interface AppProps extends TesteProps{
  name: string;
  address?: string; // ? atributo opcional (não é obrigatório receber informação)
}

function App({name, age, address = "Valor padrão"}: AppProps) {
  const [user, setUser] = useState(28) /* Estado (State) no React / hook (funcionalidade global para termos acesso aos estados da nossa aplicação, 
  muda o valor da variável user para armazenar informação) -> useState ->  fica escopado no componente -> setUser é seu foco, a partir dela é que muda user */
  
  // alternativa não recomendada:
  const user = "Teste"
  user = "Bola" // alteração de state alterando a const diretamente -> faz com que seja carregado novamente, perdendo performance

  return (
    <>
     <h1>Hello {name}!</h1>
     <h2>You are {age} years old.</h2>
     <h3>Your address is {address}</h3>
    </> // fragment -> para que não seja necessário criar outro elemento na DOM
  )
}

export default App