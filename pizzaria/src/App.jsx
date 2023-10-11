import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, reset } = useForm();
  const [open, setOpen] = useState(false);
  const [ pizzas, setPizzas ] = useState([]);

  function onOpenModal() {
    setOpen(true);
  };
  function onCloseModal() {
    setOpen(false);
  };

  function sendData(data) {
    const newPizzas = [...pizzas];

    newPizzas.push({ nome: data.nome, ingredientes: data.ingredientes, foto: data.foto });
 
    setPizzas(newPizzas);
    reset({ nome: "", ingredientes: "", foto: "" });

    localStorage.setItem("pizzas", JSON.stringify(newPizzas));
  }

  useEffect(() => {
    const newPizzas = localStorage.getItem("pizzas");
    if (newPizzas) {
      setPizzas(JSON.parse(newPizzas));
    }
  }, []);

  return (
    <div className="container-fluid">
      <nav className="navbar bg-danger">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            <img src="./logo.png" alt="Logo"
              width="80" height="70" className="d-inline-block me-3" />
            App Pizzaria: Controle de Cardápio de Pizzas.
          </a>
        </div>
      </nav>

      <div className="container mt-2">
        <h2 className="d-flex justify-content-between">
          <span>Listagem das Pizzas Disponíveis:</span>
          <span>
            <button className="btn btn-danger btn-sm" onClick={onOpenModal}>
              <i className="bi bi-plus-circle">Adicionar Pizza</i>
            </button>
          </span>
        </h2>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Nome da Pizza</th>
              <th>Ingredientes</th>
              <th>Foto</th>
            </tr>
          </thead>
          <tbody>
            {pizzas.map((pizza, index) => (
              <tr key={index}>
                <td>{pizza.nome}</td>
                <td>{pizza.ingredientes}</td>
                <td><img src={pizza.foto} alt={pizza.nome} width="100" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal open={open} onClose={onCloseModal} center>
        <div class="card">
          <div class="card-header">
            Inclusão  de Pizzas no Cardápio
          </div>
          <form class="card-body" onSubmit={handleSubmit(sendData)}>
            <h5 class="card-title">Informe os detalhes da pizza:</h5>

            <div class="mb-3">
              <label for="nome" class="form-label">Nome da Pizza:</label>
              <input type="text" class="form-control" id="nome" required {...register("nome")} />
            </div>
            <div class="mb-3">
              <label for="ingredientes" class="form-label">Ingredientes: </label>
              <textarea class="form-control" id="ingredientes" rows="3" required {...register("ingredientes")} ></textarea>
            </div>
            <div class="mb-3">
              <label for="foto" class="form-label">Url da Foto: </label>
              <input type="url" class="form-control" id="foto" required 
              {...register("foto")} />
            </div>
            <input type="submit" className="btn btn-primary px-5" />
          </form>
        </div>
      </Modal>

    </div>
  )
}
export default App
