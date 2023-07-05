import styles from "./Post.module.css"

import { Comment } from "./Comment"
import { Avatar } from "./Avatar"

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            hasBorder
            src="https://github.com/diego3g.png"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>Diego Fernandes</strong>
            <span>CTO @ Rocketseat</span>
          </div>
        </div>

        <time dateTime="2023-07-03 14:17:00" title="7 de Julho às 14:17">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galera! 👋</p>
        <p>Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 <a href="#">jane.design/doctorcare</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div>
        <Comment />
      </div>
    </article>
  )
}