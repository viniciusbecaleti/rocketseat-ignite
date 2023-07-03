import styles from "./Avatar.module.css"

export function Avatar({ hasBorder = false, ...res }) {
  return (
    <img
      className={hasBorder ? styles.avatarBordered : styles.avatar}
      {...res}
    />
  )
}