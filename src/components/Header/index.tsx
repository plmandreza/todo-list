import styles from "./Header.module.css"

export function Header() {
    return(
        <header className={styles.header}>
            <form>
                <input type="text" placeholder="Criar tarefa" />
                <button>Add</button>
            </form>
        </header>
    )
}