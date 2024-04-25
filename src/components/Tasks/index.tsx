import { TaskProps } from "../../App";
import { Item } from "../Item"
import styles from "./Tasks.module.css"

interface TasksProps {
    tasks: TaskProps[];
}

export function Tasks({tasks}: TasksProps) {
    console.log('componente tasks =>', tasks)
    const tasksLength = tasks.length
    console.log('tasksLength =>', tasksLength)

    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Tarefas adicionadas</p>
                    <span>{tasksLength}</span>
                </div>

                <div>
                    <p className={styles.done}>Concluídas</p>
                    <span>3/4</span>
                </div>
            </header>
           
            {tasks.map(task =>( // Mapeamento, retorna as informações internas. Acessa pelo índice também.
                <p key={task.id}>{task.title}</p> // React precisa de um identificador único (reference/key) para cada elemento para listá-los
            ))} 

            <div>
                <Item/>
            </div>
        </section>
    )
}