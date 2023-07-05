import { Avatar } from "./Avatar"
import styles from "./Sidebar.module.css"

import { PencilLine } from "phosphor-react"

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=60"
        alt=""
      />

      <div className={styles.profile}>
        <Avatar
          hasBorder
          src="https://github.com/viniciusbecaleti.png"
          alt=""
        />
        <strong>Vinicius Becaleti</strong>
        <span>Full Stack Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} weight="bold" />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}