import { format, formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import { useState } from "react"
import { v4 as uuid } from 'uuid'
import { toast } from 'react-toastify'

import styles from "./Post.module.css"

import { Comment } from "./Comment"
import { Avatar } from "./Avatar"

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState([])
  const [newCommentText, setNewCommentText] = useState("")

  const publishedAtFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDataRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  const isNewCommentTextEmpty = !newCommentText

  function handleCreateNewComment(event) {
    event.preventDefault()

    const newComment = {
      id: uuid(),
      content: newCommentText
    }
    
    setComments(prev => [newComment, ...prev])
    setNewCommentText("")
  }

  function handleNewCommentChange({ target }) {
    target.setCustomValidity("")
    setNewCommentText(target.value)
  }
  
  function handleNewCommentInvalid({ target }) {
    target.setCustomValidity("Esse campo é obrigatório")
  }

  function deleteComment(id) {
    setComments(prev => prev.filter(comment => comment.id !== id))
    toast.success("Comentário deletado")
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            hasBorder
            src={author.avatarUrl}
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time dateTime={publishedAt.toISOString()} title={publishedAtFormatted}>{publishedDataRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {content.map(item => {
          if (item.type === 'paragraph') {
            return (
              <p key={item.content}>
                {item.content}
              </p>
            )
          } else {
            return (
              <p key={item.content}>
                <a href="#">{item.content}</a>
              </p>
            )
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentTextEmpty}>Publicar</button>
        </footer>
      </form>

      <div>
        {comments.map(comment =>
          <Comment
            key={comment.id}
            id={comment.id}
            content={comment.content}
            onDeleteComment={deleteComment}
          />
        )}
      </div>
    </article>
  )
}