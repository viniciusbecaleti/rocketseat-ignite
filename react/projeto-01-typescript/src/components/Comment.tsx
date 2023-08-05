import { useState } from "react"
import { ThumbsUp, Trash } from "phosphor-react"
import { format, formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

import styles from "./Comment.module.css"

import { Avatar } from "./Avatar"

export interface CommentType {
  id: string
  content: string
  publishedAt: Date
}

interface CommentProps {
  comment: CommentType
  onDeleteComment: (id: string) => void
}

export function Comment({ comment: { id, content, publishedAt }, onDeleteComment }: CommentProps) {
  const [likes, setLikes] = useState(0)

  const publishedAtFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDataRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

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
              <time dateTime={publishedAt.toISOString()} title={publishedAtFormatted}>{publishedDataRelativeToNow}</time>
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