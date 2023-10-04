import { useState } from 'react'
import './App.css'

function App() {
  const [aposta, setAposta] = useState('');
  const [figura, setFigura] = useState('');
  const [msg, setMsg] = useState('');

  function click(image){
    if(msg){
      alert("Para de tentar roubar, ladrãozinho!!!")
      return
    }
    
    setAposta(image+".png")
  }


  function desafiar(){
    if(aposta == ""){
      alert("Para de tentar roubar, ladrãozinho!!!")
      return
    }

    const num = Math.ceil(Math.random() * 3)
    if(num == 1){
      setFigura("papel.png")
      if(aposta == "papel.png"){
        setMsg("Ah...Deu empate")
      }else if(aposta == "pedra.png"){
        setMsg("Poxa...Você perdeu")
      }else{
        setMsg("Eba...Você ganhou!!")
      }
    }else if(num == 2){
      setFigura("pedra.png")
      if(aposta == "pedra.png"){
        setMsg("Ah...Deu empate")
      }else if(aposta == "tesoura.png"){
        setMsg("Poxa...Você perdeu")
      }else{
        setMsg("Eba...Você ganhou!!")
      }
    }else {
      setFigura("tesoura.png")
      if(aposta == "tesoura.png"){
        setMsg("Ah...Deu empate")
      }else if(aposta == "papel.png"){
        setMsg("Poxa...Você perdeu")
      }else{
        setMsg("Eba...Você ganhou!!")
      }
    }
  }

  
  function novoJogo(){
    setAposta("")
    setFigura("")
    setMsg("")
  }

  return (
    <>
      <div className="container">
        <nav className="navbar bg-info">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src="./6729732.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top me-3" /> Jogo Jokempo </a>
          </div>
        </nav>

        <h2>
          Clique sobre a imagem.
          <img src="./pedra.png" alt="Pedra" className="img-pequena mx-3" onClick={() => click("pedra")}/>
          <img src="./papel.png" alt="Papel" className="img-pequena mx-3" onClick={() => click("papel")}/>
          <img src="./tesoura.png" alt="Tesoura" className="img-pequena mx-3" onClick={() => click("tesoura")}/>
        </h2>

        <div className="row altura-jogo">
          <div className="col-sm-4">
            <h3>Sua Aposta: </h3>
            {aposta && <img src={aposta} alt="Aposta" className='mt-5'/>}
          </div>
          <div className="col-sm-8">
            <button className='btn btn-danger btn-lg' onClick={desafiar}>
              Desafiar
            </button> <br />
            {figura && <img src={figura} alt="Figura" className='mt-5'/>}
          </div>
        <h2 className='text-danger'>{msg}</h2>
        </div>
        <button className='btn btn-success' onClick={novoJogo}>Jogar Novamente</button>
      </div>
    </>
  )
}

export default App
