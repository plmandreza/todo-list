import { Check, Pencil, Trash } from "@phosphor-icons/react"
import styles from "./Item.module.css"

export function Item() {
    return (
        <div className={styles.task}>
            <button>
            <Check size={12} />
            </button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className={styles.btnContainer}>
            <button>
            <Pencil size={12} />
            </button>

            <button>
                <Trash size={12} />
            </button>
        </div>
        </div>
    )
}