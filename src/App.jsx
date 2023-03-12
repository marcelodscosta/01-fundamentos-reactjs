import { useState } from 'react'
import { Header } from './components/Header';
import './global.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <h1>Testando</h1>
    </div>
  )
}
