import { useState } from "react"
import { ThumbsUp, Trash } from "phosphor-react"

import styles from "./Comment.module.css"

import { Avatar } from "./Avatar"

export function Comment({ id, content, onDeleteComment }) {
  const [likes, setLikes] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(id)
  }

  function handleLikeComment() {
    setLikes(prev => prev + 1)
  }

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

            <button onClick={handleDeleteComment} type="button" title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          
          <p>{content}</p>
        </div>

        <footer>
          <button
            type="button"
            onClick={handleLikeComment}
          >
            <ThumbsUp size={20} />
            Aplaudir <span>{likes}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}