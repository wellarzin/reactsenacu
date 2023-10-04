import { useForm } from "react-hook-form";


function App() {
  
  // INDICANDO QUAIS RECURSOS DO HOOK FORM ESTÃO SENDO UTILIZADOS.
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      modelo: "fiesta",
      alarme: true
    }
  });
  
  function calcularPreco(){
    let preco
    if(watch("modelo") == "fiesta"){
      preco = 72900
    }else if(watch("modelo") == "ka"){
      preco = 65000
    }else{
      preco = 84000
    }


    if(watch("alarme")){
      preco += 1200
    }

    if(watch("vidros")){
      preco += 2000
    }

    // return preco.toFixed(2)
    return preco.toLocaleString("pt-br", {minimumFractionDigits: 2})
  }

  return (
    <div className="container-fluid">

      <header className="row">
        <div className='bg-primary text-white d-flex'>
          <img src="./ford.png" alt="Logo"
            className="my-2 me-3"
            width={200}
          />
          <div>
            <h1>Revenda Avenida</h1>
            <h2>Veículos em Promoção</h2>
          </div>
        </div>
      </header>

      <main className='row'>
        <div className="col-sm-3">
          <h4 className='text-primary mt-4'>Modelos em Promoção</h4>
          <div className="form-check text-primary">
            <input className="form-check-input" type="radio" id="fiesta" {...register("modelo")} value="fiesta" />
            <label className="form-check-label" htmlFor="fiesta">
              Fiesta
            </label>
          </div>
          <div className="form-check text-primary">
            <input className="form-check-input" type="radio" id="ka" {...register("modelo")} value="ka" />
            <label className="form-check-label" htmlFor="ka">
              Ka
            </label>
          </div>
          <div className="form-check text-primary">
            <input className="form-check-input" type="radio" id="eco" {...register("modelo")} value="eco" />
            <label className="form-check-label" htmlFor="eco">
              Eco Sport
            </label>
          </div>
        </div>
        <div className="col-sm-6">
          <img src={watch("modelo") + ".png"} alt="Carro" className='img-fluid' />
        </div>
        <div className="col-sm-3">
          <h4 className='text-primary mt-4'>Selecione os Opcionais:</h4>
          <div className="form-check text-primary">
            <input className="form-check-input" type="checkbox" id="alarme" {...register("alarme")} />
            <label className="form-check-label" htmlFor="alarme">
              Alarme
            </label>
          </div>
          <div className="form-check text-primary">
            <input className="form-check-input" type="checkbox" id="vidros" {...register("vidros")} />
            <label className="form-check-label" htmlFor="vidros">
              Vidros Elétricos
            </label>
          </div>
        </div>
      </main>

      <footer className="row bg-danger text-white">
        <div className="col-sm-6">
          <h3 className='my-3'>Preço do Veículo R$: {calcularPreco()}</h3>
        </div>
        <div className="col-sm-6">
          <h3 className='float-end my-3'>
            <i>* Consulte Opções de Financiamento</i>
          </h3>
        </div>
      </footer>
    </div>
  )
}

export default App


