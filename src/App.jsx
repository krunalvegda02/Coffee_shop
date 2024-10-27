import { useState } from 'react'
import Header from './components/Header';
import Hero from "./components/Hero";
import MenuDisplay from './components/CategoryCard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Hero />
    </>
  )
}

export default App
