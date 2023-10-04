import { useState } from 'react'
import './App.css'

function App() {
  const [mesas, setMesas] = useState(10)
  const [aviso, setAviso] = useState("No momento, há mesas disponiveis.")

  function ocuparMesa(){
    if(mesas == 0){
      alert('Não há mesas disponiveis.')
      return
    }
    if(mesas == 1){
      setAviso("Por favor, aguarde... Todas as mesas estão ocupadas")
    }

    setMesas(mesas-1)
  }
  
  function liberarMesa(){
    if(mesas == 10){
      alert('Não há mesas para liberar.')
      return
    }
    if(mesas == 0){
      setAviso("No momento, há mesas disponiveis.")
    }
    
    setMesas(mesas+1)
  }

  return (
    <div className='container'>
      <h2 className='my-3'>Restaurante da fazendinha: Controle de Mesas</h2>
      <img src="restaurante.jpg" alt="" srcset="" width={600}/>

      <div className="row mt-4">
        <div className="col-sm-6">
          <h3>Nº Mesas Disponíveis: {mesas}</h3>
        </div>
       
        <div className="col-sm-6">
          <h3>Nº Mesas Ocupadas: {10 - mesas}</h3>
        </div>
      </div>
        
        <button className='btn btn-primary bnt-lg mt-3 me-3' onClick={ocuparMesa}> Ocupar mesa</button>
        <button className='btn btn-danger bnt-lg mt-3 me-3' onClick={liberarMesa}>Liberar mesa</button>
        
        <h3 className='text-success mt-3'>{aviso}</h3>
    </div>
  )
}

export default App