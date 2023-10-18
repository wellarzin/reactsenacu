import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useState, useEffect } from 'react';
import { set, useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit, reset, setFocus, watch } = useForm()
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [pizzas, setPizzas] = useState([])

  const [modalNome, setModalNome] = useState("")
  const [modalIngredientes, setModalIngredientes] = useState("")
  const [modalFoto, setModalFoto] = useState("")

  function gravaDados(data) {
    const pizzas2 = [...pizzas]
    pizzas2.push({
      nome: data.nome,
      ingredientes: data.ingredientes,
      foto: data.foto
    })
    setPizzas(pizzas2)
    setFocus("nome")
    reset({ nome: "", ingredientes: "", foto: "" })
    localStorage.setItem("pizzas", JSON.stringify(pizzas2))
  }

  function mostraPizza(i) {
    // alert(`${pizzas[i].nome} - ${pizzas[i].ingredientes}`)
    setModalNome(pizzas[i].nome)
    setModalIngredientes(pizzas[i].ingredientes)
    setModalFoto(pizzas[i].foto)

    setOpen2(true)
  }

  function excluirPizza(i) {
    const nome = pizzas[i].nome
    if(confirm(`Confirma a exclusão da ${nome}?`)) {
      const pizzas2 = [...pizzas]
      pizzas2.splice(i, 1)
      setPizzas(pizzas2)
      localStorage.setItem("pizzas", JSON.stringify(pizzas2))
    }
  }

  const listaPizzas = pizzas.map((pizza, i) => (
    <tr key={pizza.nome}>
      <td>{pizza.nome}</td>
      <td>{pizza.ingredientes}</td>
      <td><img src={pizza.foto} alt={`Foto da Pizza ${pizza.nome}`}
        width={150} height={100} /></td>
      <td>
        <i className="bi bi-search fs-4 text-info"
          style={{ cursor: 'pointer' }}
          title='Ver detalhes'
          onClick={() => mostraPizza(i)}></i>
        <i class="bi bi-trash fs-4 text-danger ms-2"
          style={{ cursor: 'pointer' }}
          title='Excluir Pizza'
          onClick={() => excluirPizza(i)}></i>
      </td>

    </tr>
  ))

  useEffect(() => {
    if (localStorage.getItem("pizzas")) {
      const pizzas2 = JSON.parse(localStorage.getItem("pizzas"))
      setPizzas(pizzas2)
    }
  }, [])


  return (
    <div className="container-fluid">
      <nav className="navbar bg-danger">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            <img src="./logo.png" alt="Logo" width="48" height="40"
              className="d-inline-block align-text-top me-2" />
            App Pizzaria: Controle do Cardápio de Pizzas
          </a>
        </div>
      </nav>

      <div className="container mt-2">
        <h2 className="d-flex justify-content-between">
          <span>Listagem das Pizzas Disponíveis</span>
          <button className="btn btn-danger px-3"
            onClick={() => setOpen(true)}>
            Adicionar
          </button>
        </h2>

        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Nome da Pizza</th>
              <th>Ingredientes</th>
              <th>Foto</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {listaPizzas}
          </tbody>
        </table>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} center>
        <div className="card">
          <div className="card-header">
            Inclusão de Pizzas no Cardápio
          </div>
          <form className="card-body" onSubmit={handleSubmit(gravaDados)}>
            <h5 className="card-title">Informe os Detalhes da Pizza</h5>
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">Nome da Pizza:</label>
              <input type="text" className="form-control"
                id="nome" required {...register("nome")} />
            </div>
            <div className="mb-3">
              <label htmlFor="ingredientes" className="form-label">Ingredientes:</label>
              <textarea className="form-control" id="ingredientes"
                rows="3" required {...register("ingredientes")}></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="foto" className="form-label">URL da Foto:</label>
              <input type="url" className="form-control"
                id="foto" required {...register("foto")} />
            </div>
            <input type="submit" value="Enviar"
              className="btn btn-primary px-5" />
          </form>
          {watch("foto") &&
            <img src={watch("foto")}
              alt="Foto da Pizza" className='rounded mx-auto d-block'
              width={300} height={200} />
          }
        </div>
      </Modal>

      <Modal open={open2} onClose={() => setOpen2(false)} center>
        <div class="card">
          <img src={modalFoto} class="card-img-top" alt="foto da pizza" width={200} height={400} />
          <div class="card-body">
            <h5 class="card-title">{modalNome}</h5>
            <p class="card-text">{modalIngredientes}</p>
            <a href="#" class="btn btn-primary">Incluir no Pedido</a>
          </div>
        </div>
      </Modal>

    </div>
  )
}

export default App