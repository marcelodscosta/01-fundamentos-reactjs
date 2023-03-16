import { Header } from './components/Header';
import styles from './App.module.css';
import './global.css'
import { Sidebar } from '../src/components/Sidebar';
import { Post } from './components/Post';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/81534727?v=4",
      name: "Marcelo Costa",
      role: "Desenvolvedor Web"
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-03-14 21:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/81534727?v=4",
      name: "Viviane Costa",
      role: "Encarregado (a) de RH"
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-03-14 21:00:00'),
  },
];

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post key={post.id} post={post} />
            );
          })}
        </main>

      </div>
    </div>
  )
}
