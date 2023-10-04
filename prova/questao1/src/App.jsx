import "./App.css"
import { useState } from "react";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, watch } = useForm()
  const [ingredientes, setIngredientes] = useState({})
  const [array, setArray] = useState([])
  const [aviso, setAviso] = useState("")

  const frutas = [
    {
      nome: "maca", 
      image: "./maca.png"
    },
    {
      nome: "blueberry",
      image: "./blueberry.png"
    },
    {
      nome: "kiwi",
      image: "./kiwi.png"
    },
    {
      nome: "banana",
      image: "./banana.png"
    },
    {
      nome: "laranja",
      image: "./laranja.png"
    },
    {
      nome: "melancia",
      image: "./melancia.png"
    },
    {
      nome: "morango",
      image: "./morango.png"
    }

  ]

  let name
  function enviarDados(data){
    name = data.nome
    setAviso(`Obrigado ${name}, seu pedido foi realizado com sucesso! O numero do seu pedido é: ${Math.floor(Math.random() * 1000)}`)
  }

  function listar(fruta) {
    if (array.length < 5) {
      setArray([...array,{image: fruta}])
     console.log(array);
    }else{
      alert("Você já escolheu 5 ingredientes")
    }
    
  }

  function limpar(){
    setArray([])
    setAviso("")  
  }

  return (
    <div className="container-fluid">
      <nav className="navbar bg-info">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="./4976951.png" alt="Logo" width="50" height="40" className="d-inline-block me-3" /> Fruteira Wellar
          </a>
        </div>
      </nav>
      <div className="card text-center mt-3 w-75 mx-auto">
        <div className="card-header">
          <img src="./4976951.png" alt="Seguro" width={200} />
          <h4>Monte sua salada de fruta:</h4>
        </div>
        <div className="card-body">
          <h2>Escolha até 5 ingredientes (pode repetir) <br />
            <ul>{frutas.map((item) => <li key={item.image}><img src={item.image} alt="" onClick={() => listar(item.image)} className="img-pequena mx-3" /></li>)}</ul>
          </h2>
          <hr />
          <h2>Seus ingredientes: <br />
            <ul>{array.map((item) => <li key={item.image}><img src={item.image} alt="" className="img-pequena mx-3"/></li>)}</ul>
          </h2><br />

          <form action="" onSubmit={handleSubmit(enviarDados)} onReset={limpar}>
            <div className="row">
                  <div className="col">
                    <input type="text" className="form-control" placeholder="Nome" id="nome" {...register("nome")} />
                  </div>
                  <div className="col mt-4">
                  <button type='submit' className='btn btn-success btn-lg'>Concluir Pedido</button>
                  <button type='reset' className='btn btn-danger btn-lg ms-3' onClick={limpar}>Limpar Pedido</button>
                </div>
            </div>
          </form>
        </div>
        <div className="card-footer text-body-secondary">
           <h3 className='text-success mt-3'>{aviso}</h3>
           
        </div>
      </div>
    </div>
  )
}

export default App

