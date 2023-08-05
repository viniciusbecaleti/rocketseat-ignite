import { ImgHTMLAttributes } from "react"
import styles from "./Avatar.module.css"

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean
}

export function Avatar({ hasBorder = false, ...res }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarBordered : styles.avatar}
      {...res}
    />
  )
}