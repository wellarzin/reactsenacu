import { useState } from "react";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, reset } = useForm();
  const [patients, setPatients] = useState([]);
  const patientList = patients.map(patient => <li key={patient}>{patient}</li>);
  const [ onAssist, setAssist] = useState("")

  function sendData(data){
    setPatients([...patients, data.name]);
    reset({name: ""});
  }

  function assist(){
    if(patients.length == 0){
      alert("Não há pacientes na fila de espera.")
      setAssist("")
      return
    }
    const patients2 = [...patients]
    const exclude = patients2.shift()
    setPatients(patients2)
    setAssist(exclude)
  }

  function assistNeed(data){
    if(patients.length == 0){
      alert("Não há pacientes na fila de espera.")
      setAssist("")
      return
    }
    
    const patients2 = [...patients]
    patients2.unshift(data.name)
    setPatients(patients2)
    reset({name: ""})
  }


  return (
    <div classNameName="container-fluid">
      <nav className="navbar bg-info">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="./icone.png" alt="Logo"
              width="50" height="40" className="d-inline-block me-3" />
            MWS Consultorio Odontológico
          </a>
        </div>
      </nav>
      <div className="card text-center mt-3 w-75 mx-auto">
        <div className="card-header">
          <img src="./consultorio.jpeg" alt="Dentista" width={450} height={250} />
          <h4>Controle de pacientes.</h4>
        </div>
        <div className="card-body">
          <form className="row" onSubmit={handleSubmit(sendData)}>
            <div className="col">
              <input type="text" className="form-control" placeholder="Nome do Paciente" required {...register("name")} />
            </div>
            <div className="col">
              <button type="submit" className="btn btn-primary me-2"> Adicionar </button>
              <button type="button" className="btn btn-danger me-2" onClick={handleSubmit(assistNeed)}>Urgencia</button>
              <button type="button" className="btn btn-success" onClick={assist}>Atender</button>
            </div>
          </form>
          <h4 className="mt-3 text-start">Lista dos Pacientes em Espera: </h4>
          <ol className="text-start fs-5">
            {patientList}
          </ol>
        </div>
        <div className="card-footer text-body-secondary">
          <h4 className="text-start">Paciente em Atendimento: 
          <span className="text-danger ms-2">{onAssist}</span>
          </h4>
        </div>
      </div>
    </div>
  )
}


export default App
