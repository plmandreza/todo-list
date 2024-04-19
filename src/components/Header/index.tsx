import styles from "./Header.module.css"
import { PlusCircle } from "@phosphor-icons/react"

export function Header() {
    return(
        <header className={styles.header}>
            <form className={styles.newTaskForm}>
                <input type="text" placeholder="Criar tarefa" />
                <button>
                    <PlusCircle size={20}/>
                </button>
            </form>
        </header>
    )
}