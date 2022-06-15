import styles from './App.module.css';
import { Header } from "./components/Header";
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import './global.css';


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diogosalesdev.png',
      name: 'Diogo Sales',
      role: 'CEO & Founder @DSTech'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare', href: 'https://jane.design/doctorcare'},
      {type: 'link', content: '#novoprojeto #nlw #rocketseat'}  
    ],
    publishedAt: new Date('2022-06-05 09:28:35')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO & Founder @Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Eu subi mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉s jane.design/doctorcare', href: 'https://jane.design/doctorcare'},
      {type: 'link', content: '#novoprojeto #nlw #rocketseat'}  
    ],
    publishedAt: new Date('2022-06-05 10:28:35')
  }
]


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id} 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}              
              />)
          })}
        </main>
      </div>
    </div>
  )
}
