interface TesteProps {
  age?: number;
}

interface AppProps extends TesteProps{
  name: string;
  address?: string; // ? atributo opcional (não é obrigatório receber informação)
}

type Teste = {
  age: number;
} // outra forma de criar interface -> type

function App({name, age, address = "Valor padrão"}: AppProps) {
console.log('name', name)
console.log('age', age)
console.log('address', address)

  return (
    <>
     <h1>Hello {name}!</h1>
     <h2>You are {age} years old.</h2>
     <h3>Your address is {address}</h3>
    </> // fragment -> para que não seja necessário criar outro elemento na DOM
  )
}

export default App
