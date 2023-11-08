import { useState } from "react"
import Novidades from "./components/Novidades"
import Titulo from "./components/Titulo"

function App() {
  const [buy, setBuy] = useState([])

  
  function addFilm(titulo, preco){
    const buy2 = [...buy]
    buy2.push({titulo, preco})
    setBuy(buy2)
  }

  return (
    <>
      <Titulo buy={buy} />
      <Novidades addFilm={addFilm} />
    </>
  )
}

export default App
