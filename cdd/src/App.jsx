import { useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'

const fotos = ["recife1.jpg", "recife2.jpg", "recife3.jpg", "recife4.jpg", "recife5.jpg"]

function App() {
  const [num, setNum] = useState(1)
  const [mensa, setMensa] = useState("")
  const { register, handleSubmit } = useForm()

  function trocaFigura() {
    let aux = num + 1
    if (aux == 6) {
      aux = 1
    }
    setNum(aux)
  }

  function verificaResposta(data) {
    if (data.resposta.toUpperCase() == "RECIFE") {
      setMensa(`Parabéns! Você acertou ao ver a ${num} foto`)
    } else {
      setMensa("Ah... Você errou. As fotos são da cidade: Recife")
    }
  }

  return (
    <div className="container-fluid">
      <nav class="navbar bg-danger">
        <div class="container-fluid">
          <a class="navbar-brand text-white" href="#">
            <img src="./logo.png" alt="Logo"
              width="50" height="40" class="d-inline-block me-3" />
            Quiz: Cidades do Brasil
          </a>
        </div>
      </nav>

      <div class="card text-center mt-3 w-75 mx-auto">
        <div class="card-header">
          <div className="row">
            <div className="col">
              <h3 className="text-primary text-start">Que cidade é essa?</h3>
            </div>
            <div className="col">
              <h3 className="text-primary text-end">Foto {num} de 5</h3>
            </div>
          </div>
        </div>
        <div class="card-body">
          <h5 className="text-danger text-start">
            * Clique sobre a imagem para trocar
          </h5>
          {/* <img src={"./recife"+num+".jpg"} alt="Foto"
            width={600} height={400}
            onClick={trocaFigura}
          /> */}
          <img src={fotos[num-1]} alt="Foto"
            width={600} height={400}
            onClick={trocaFigura}
          />
          <form className="row mt-3" 
            onSubmit={handleSubmit(verificaResposta)} >
            <div className="col">
              <input type="text" className="form-control"
                placeholder="Informe o nome da cidade" 
                required 
                {...register("resposta")} />
            </div>
            <div className="col d-grid">
              <button type="submit" className='btn btn-primary'>
                Responder
              </button>
            </div>
          </form>
        </div>
        <div class="card-footer text-body-secondary">
          <h4 className='text-success'>{mensa}</h4>
        </div>
      </div>
    </div>
  )
}

export default App
