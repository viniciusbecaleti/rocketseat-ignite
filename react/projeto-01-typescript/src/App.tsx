import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./global.css"
import styles from "./App.module.css"

import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post, PostType } from "./components/Post"

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @ Rocketseat"
    },
    content: [
      { type: "paragraph", content: "Fala galera! 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "👉 jane.design/doctorcare" }
    ],
    publishedAt: new Date("2023-07-04 14:00:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @ Rocketseat"
    },
    content: [
      { type: "paragraph", content: "Fala galera! 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "👉 jane.design/doctorcare" }
    ],
    publishedAt: new Date("2023-07-05 10:00:00")
  },
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              post={post}
            />
          ))}
        </main>
      </div>

      <ToastContainer theme="dark" />
    </>
  )
}
