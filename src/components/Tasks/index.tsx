import { Item } from "../Item"
import styles from "./Tasks.module.css"

export function Tasks() {
    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Tarefas adicionadas</p>
                    <span>5</span>
                </div>

                <div>
                    <p className={styles.done}>Concluídas</p>
                    <span>3/4</span>
                </div>
            </header>
           
            <div>
                <Item/>
            </div>
        </section>
    )
}