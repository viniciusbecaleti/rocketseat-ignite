import { ThumbsUp, Trash } from "phosphor-react"

import styles from "./Comment.module.css"

import { Avatar } from "./Avatar"

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar
        src="https://github.com/viniciusbecaleti.png"
        alt=""
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Vinicius Becaleti</strong>
              <time dateTime="2023-07-03 14:17:00" title="7 de Julho às 14:17">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}