import "./App.css"
import {useState} from "react"
import Tarefa from "./Components/Tarefa"
import RenderTrf from "./Components/RenderTrf"

function App() {
  const [trf, setTrf] = useState("")
  const [tarefasList, setTarefasList] = useState([])
  
  const [tarefaTamanho, setTamanho] = useState("")
 
  function verificarTarefa(e) {
    if (e.target.value.length >= 98) {
      alert("Tamanho máximo de carácter!")
    }else {
      setTrf(e.target.value)
    }
  }
  function data() {
    const dataObj = new Date()
    const dia = ("00"+dataObj.getDate()).slice(-2)
    const mes = ("00"+(dataObj.getMonth()+1)).slice(-2)
    const ano = dataObj.getFullYear()
    
    return dia+"/"+mes+"/"+ano
  }
  
  function novaTarefa() {
    const dataAtual = data()
    const novaTarefa = [...tarefasList, 
      {
        "tarefa": trf,
        "data": dataAtual,
        "id": tarefasList.length
      }
    ]
    setTarefasList(novaTarefa)
    console.log(trf.length)
  }
  
  const removerTarefa = (id) => {
    const tarefasAtualizadas = tarefasList.filter(tarefasList => tarefasList.id != id)
    console.log(id)
    setTarefasList(tarefasAtualizadas)
  }
  
  return (
    <div className="app">
      <div className="header">
        <div className="app_name">
          <h1>Minhas tarefas</h1>
        </div>
        <div className="nova_tarefa">
          <input type="text" placeholder="Nova tarefa" value={trf} onChange={verificarTarefa} />
          <button onClick={novaTarefa}>Adicionar</button>
        </div>
      </div>
      <hr></hr>
      <RenderTrf tarefas={tarefasList} removerTarefa={removerTarefa} />
    </div>
  )
}

export default App