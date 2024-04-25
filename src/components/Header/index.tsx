import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import styles from "./Header.module.css";
import { PlusCircle } from "@phosphor-icons/react";

interface HeaderProps { // Objeto. Recebe propriedades Props de um determinado tipo. Também pode ser IHeader.
    onAddTask: (taskTitle: string) => void; // Propriedade que está sendo "retirada" do objeto
}

export function Header({onAddTask}: HeaderProps) {
    const [newTask, setNewTask] = useState(""); // Estado é NewTask
    console.log('addTask', onAddTask)

    function handleCreateNewTask(event: FormEvent) { // Cria a nova tarefa
        event.preventDefault(); // Não faz a renderização automática que deixa um ? na barra de url ao clicar no button
        onAddTask(newTask);
        console.log('Criar nova tarefa:', newTask)
        setNewTask("");
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) { // Acessa o valor digitado no input e altera o estado (State)
        event.target.setCustomValidity("");
        setNewTask(event.target.value);
        console.log('NewTask', newTask);
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) { // Valida o input de forma customizada
        event.target.setCustomValidity("Digite um título para a tarefa! :)");
    }
    return (
        <header className={styles.header}>
            <form className={styles.newTaskForm} onSubmit={handleCreateNewTask}>
                <input
                    type="text"
                    placeholder="Criar tarefa"
                    value={newTask}
                    onChange={handleNewTaskChange}
                    onInvalid={handleNewTaskInvalid}
                    required
                />
                <button>
                    <PlusCircle size={20} />
                </button>
            </form>
        </header>
    )
}