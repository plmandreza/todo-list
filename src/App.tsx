import { useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import "./global.css";

export interface TaskProps { // Tipagem das tarefas que serão criadas
  id: string;
  title: string;
  isChecked: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]) // generic -> < >

  function createTask(taskTitle: string) { // Cria nova task com um id
    const newTask = {
      id: crypto.randomUUID(), // O sistema preenche automaticamente para o usuário
      title: taskTitle, // Depende do usuário
      isChecked: false // O sistema preenche automaticamente para o usuário
    }

    setTasks([...tasks, newTask]) // Spread ... -> histórico de todas as informações que a variável task tem e adiciona a nova task
  }

  function deleteTask(taskId: string) { // Filtro
    if (!confirm("Deseja mesmo apagar essa tarefa?")) {
      return
    }

    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== taskId
    })

    setTasks(tasksWithoutDeletedOne)
  }

  function toggleTask({ id, value }: { id: string, value: boolean }) { // Desestruturação de elementos
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task, // Spread
          isChecked: value
        };
      }

      return { ...task };
    }); // Mapeamento

    setTasks(updatedTasks);
  }

  return (
    <>
      <Header onAddTask={createTask} />
      <Tasks
        tasks={tasks}
        onDeleteTask={deleteTask}
        onToggleTaskStatus={toggleTask}
      />
    </>
  );
}

export default App