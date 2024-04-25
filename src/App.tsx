import { useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import "./global.css";

export interface TaskProps { // Tipagem das tarefas que serão criadas
  id: string;
  title: string;
  isChecked: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([{ // Armazena as tarefas
    id: '1',
    title: 'Estudar React',
    isChecked: false 
  }, {
    id: '2',
    title: 'Estudar TypeScript',
    isChecked: false
  } , {
    id: '3',
    title: 'Estudar Node.js',
    isChecked: false
  }
  ])

  console.log('tasks =>', tasks)

  function createTask(taskTitle: string) { // Cria nova task com um id
    const newTask = {
      id: crypto.randomUUID(), // O sistema preenche automaticamente para o usuário
      title: taskTitle, // Depende do usuário
      isChecked: false // O sistema preenche automaticamente para o usuário
    }

    console.log('newTask =>', newTask)

    setTasks([...tasks, newTask]) // Spread ... -> histórico de todas as informações que a variável task tem e adiciona a nova task
  }

  return (
    <>
      <Header onAddTask={createTask} />
      <Tasks tasks={tasks}/>
    </>
  )
}

export default App