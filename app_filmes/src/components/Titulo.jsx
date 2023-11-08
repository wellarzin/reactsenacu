import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useState } from 'react';

function Titulo(props) {
  const [open, setOpen] = useState(false)

  const showBuy = () => {
    setOpen(true)
  }

  const shoppingList = props.buy.map(buy => (
    <tr>
      <td>{buy.titulo}</td>
      <td>{buy.preco.toLocaleString("pt-br", { minimumFractionDigits: 2 })}</td>
    </tr>
  ))

  return (
    <>
      <nav className="navbar bg-warning">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="./logo.png" alt="Logo" width="30" height="24"
              className="d-inline-block align-text-top me-3" />
            AvenidaVídeo: Plataforma de Filmes Online
          </a>
          <button className="btn btn-primary position-relative" onClick={showBuy}>
            Ver Carrinho <i className="bi bi-cart-check"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {props.buy.length}
              <span className="visually-hidden">Filmes Adicionados</span>
            </span>
          </button>
        </div>
      </nav>
      <Modal open={open} onClose={() => setOpen(false)} center>
        <h3 className='mt-4'>Lista dos files Adicionados ao Carrinho</h3>
        <table class="table table-light table-hover">
          <thead>
            <tr>
              <th>Titulo do Filme</th>
              <th>Preço R$</th>
            </tr>
          </thead>
          <tbody>
            {shoppingList}
          </tbody>
        </table>
      </Modal>
    </>
  )
}

export default Titulo