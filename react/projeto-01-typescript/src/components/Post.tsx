import { format, formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react"
import { v4 as uuid } from 'uuid'
import { toast } from 'react-toastify'

import styles from "./Post.module.css"

import { Comment, CommentType } from "./Comment"
import { Avatar } from "./Avatar"

interface Author {
  name: string
  role: string
  avatarUrl: string
}

interface Content {
  type: "paragraph" | "link"
  content: string
}

export interface PostType {
  id: number,
  author: Author
  content: Content[]
  publishedAt: Date
}

interface PostProps {
  post: PostType
}

export function Post({ post: { author, content, publishedAt } }: PostProps) {
  const [comments, setComments] = useState<CommentType[]>([])
  const [newCommentText, setNewCommentText] = useState("")

  const publishedAtFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDataRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  const isNewCommentTextEmpty = !newCommentText

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()

    const newComment = {
      id: uuid(),
      content: newCommentText,
      publishedAt: new Date()
    }
    
    setComments(prev => [newComment, ...prev])
    setNewCommentText("")
  }

  function handleNewCommentChange({ target }: ChangeEvent<HTMLTextAreaElement>) {
    target.setCustomValidity("")
    setNewCommentText(target.value)
  }
  
  function handleNewCommentInvalid({ target }: InvalidEvent<HTMLTextAreaElement>) {
    target.setCustomValidity("Esse campo é obrigatório")
  }

  function deleteComment(id: string) {
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
            comment={comment}
            onDeleteComment={deleteComment}
          />
        )}
      </div>
    </article>
  )
}